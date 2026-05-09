<script lang="ts">
  import { cubicOut } from 'svelte/easing';
  import { fade, fly } from 'svelte/transition';

  import { flashcards, type FlashcardCategory } from '$lib/cards';

  type CategoryFilter = FlashcardCategory | 'All';

  const categories: CategoryFilter[] = [
    'All',
    'Microsoft 365 Basics',
    'Microsoft 365 Intermediate',
    'Microsoft 365 Advanced',
    'Outlook',
    'Teams',
    'Windows',
    'Security',
    'Customer Service',
    'Scenarios'
  ];

  let currentIndex = $state(0);
  let selectedCategory = $state<CategoryFilter>('All');
  let isFlipped = $state(false);
  let knewCount = $state(0);
  let missedCount = $state(0);
  let answeredIds = $state<Set<number>>(new Set());
  let copiedPrompt = $state(false);
  let copyError = $state(false);
  let copiedTimer: ReturnType<typeof setTimeout> | undefined;
  let showMobileCategories = $state(false);
  let triggerEl: HTMLButtonElement | undefined = $state();
  let drawerCloseEl: HTMLButtonElement | undefined = $state();
  let prevDrawerOpen = false;

  $effect(() => {
    const open = showMobileCategories;
    if (open && !prevDrawerOpen) {
      drawerCloseEl?.focus();
    } else if (!open && prevDrawerOpen) {
      triggerEl?.focus();
    }
    prevDrawerOpen = open;
  });

  function handleWindowKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && showMobileCategories) {
      showMobileCategories = false;
    }
  }

  const studyFocusByCategory: Record<FlashcardCategory, string> = {
    'Microsoft 365 Basics':
      'Review the Microsoft 365 admin center, user accounts, licenses, service health, OneDrive, SharePoint, and Exchange Online basics.',
    'Microsoft 365 Intermediate':
      'Focus on how admins troubleshoot access, licensing, groups, mailbox permissions, mail flow, Office activation, and retention.',
    'Microsoft 365 Advanced':
      'Study Entra ID sign-in logs, Conditional Access, MFA behavior, audit logs, Purview, eDiscovery, and least-privilege administration.',
    Outlook:
      'Practice isolating Outlook desktop issues from Exchange Online issues by comparing Outlook on the web, profiles, mail flow, mailbox settings, and cached mode.',
    Teams:
      'Review Teams meetings, device settings, channels, SharePoint-backed file storage, Outlook add-ins, and common sign-in or audio problems.',
    Windows:
      'Study practical desktop support troubleshooting: networking, BitLocker, performance, restart behavior, drivers, updates, and event logs.',
    Security:
      'Review phishing response, identity verification, MFA, Conditional Access, social engineering, and safe escalation habits.',
    'Customer Service':
      'Practice calm discovery questions, ticket notes, expectation-setting, prioritization, and explaining technical ideas in plain language.',
    Scenarios:
      'Work through the troubleshooting flow out loud: scope, impact, recent changes, isolation steps, evidence, next action, and escalation.'
  };

  let filteredCards = $derived(
    selectedCategory === 'All'
      ? flashcards
      : flashcards.filter((card) => card.category === selectedCategory)
  );
  let totalCards = $derived(filteredCards.length);
  let currentCard = $derived(filteredCards[currentIndex]);
  let progressPercent = $derived(totalCards === 0 ? 0 : ((currentIndex + 1) / totalCards) * 100);
  let answeredCount = $derived(answeredIds.size);
  let filteredAnsweredCount = $derived(
    filteredCards.filter((card) => answeredIds.has(card.id)).length
  );
  let scorePercent = $derived(
    answeredCount === 0 ? 0 : Math.round((knewCount / answeredCount) * 100)
  );
  let studyFocus = $derived(currentCard ? studyFocusByCategory[currentCard.category] : '');
  let resourceQuery = $derived(
    currentCard ? `${currentCard.category} ${currentCard.question} help desk` : ''
  );
  let usesMicrosoftLearn = $derived(
    currentCard ? !['Customer Service', 'Scenarios'].includes(currentCard.category) : true
  );
  let resourceLabel = $derived(usesMicrosoftLearn ? 'Search Microsoft Learn' : 'Search YouTube');
  let resourceUrl = $derived(
    usesMicrosoftLearn
      ? `https://learn.microsoft.com/search/?terms=${encodeURIComponent(resourceQuery)}`
      : `https://www.youtube.com/results?search_query=${encodeURIComponent(resourceQuery)}`
  );
  let chatPrompt = $derived(
    currentCard
      ? `Act as a patient help desk interview coach. I am studying for a desktop support / Microsoft 365 interview.

Category: ${currentCard.category}
Question: ${currentCard.question}
Answer I was given: ${currentCard.answer}

Teach me this topic in plain English. Then give me:
1. A simple mental model
2. The first troubleshooting steps I should say in an interview
3. Common mistakes candidates make
4. Two follow-up interview questions with ideal answers
5. A short practice scenario`
      : ''
  );
  let chatGptUrl = $derived(`https://chatgpt.com/?q=${encodeURIComponent(chatPrompt)}`);
  let claudeUrl = $derived(`https://claude.ai/new?q=${encodeURIComponent(chatPrompt)}`);

  function moveTo(index: number) {
    if (totalCards === 0) {
      currentIndex = 0;
    } else {
      currentIndex = (index + totalCards) % totalCards;
    }
    isFlipped = false;
    copiedPrompt = false;
    copyError = false;
  }

  function nextCard() {
    moveTo(currentIndex + 1);
  }

  function previousCard() {
    moveTo(currentIndex - 1);
  }

  function randomCard() {
    if (totalCards < 2) return;

    let nextIndex = currentIndex;
    while (nextIndex === currentIndex) {
      nextIndex = Math.floor(Math.random() * totalCards);
    }
    moveTo(nextIndex);
  }

  function selectCategory(category: CategoryFilter) {
    selectedCategory = category;
    currentIndex = 0;
    isFlipped = false;
    copiedPrompt = false;
    copyError = false;
    showMobileCategories = false;
  }

  function resetSession() {
    currentIndex = 0;
    selectedCategory = 'All';
    isFlipped = false;
    copiedPrompt = false;
    copyError = false;
    knewCount = 0;
    missedCount = 0;
    answeredIds = new Set();
  }

  function markCard(result: 'knew' | 'missed') {
    if (!currentCard) return;
    const wasAnswered = answeredIds.has(currentCard.id);
    if (!wasAnswered) {
      answeredIds = new Set(answeredIds).add(currentCard.id);
      if (result === 'knew') {
        knewCount += 1;
      } else {
        missedCount += 1;
      }
    }
    nextCard();
  }

  function flipCard() {
    isFlipped = !isFlipped;
  }

  function handleCardKeydown(event: KeyboardEvent) {
    if (event.target !== event.currentTarget) return;
    if (event.key !== 'Enter' && event.key !== ' ') return;

    event.preventDefault();
    flipCard();
  }

  function flashCopied() {
    copiedPrompt = true;
    copyError = false;
    if (copiedTimer) clearTimeout(copiedTimer);
    copiedTimer = setTimeout(() => {
      copiedPrompt = false;
    }, 2000);
  }

  async function copyPrompt() {
    if (!navigator.clipboard) {
      copyError = true;
      return;
    }
    try {
      await navigator.clipboard.writeText(chatPrompt);
      flashCopied();
    } catch {
      copyError = true;
      copiedPrompt = false;
    }
  }

  function openInAI(url: string) {
    navigator.clipboard?.writeText(chatPrompt).then(flashCopied, () => {
      copyError = true;
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  function openInAIFromCard(event: MouseEvent, url: string) {
    event.stopPropagation();
    openInAI(url);
  }

  function markCardFromAnswer(event: MouseEvent, result: 'knew' | 'missed') {
    event.stopPropagation();
    markCard(result);
  }

  function categoryButtonClasses(category: CategoryFilter) {
    return [
      'rounded-full border px-3 py-1 text-xs font-semibold transition duration-300 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-200',
      selectedCategory === category
        ? 'border-teal-600 bg-teal-50 text-teal-800'
        : 'border-slate-200 bg-white text-slate-600 hover:border-teal-500 hover:text-teal-700'
    ];
  }

  function drawerCategoryButtonClasses(category: CategoryFilter) {
    return [
      'w-full rounded-lg border px-4 py-3 text-left text-sm font-bold transition duration-300 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-200',
      selectedCategory === category
        ? 'border-teal-600 bg-teal-50 text-teal-800'
        : 'border-slate-200 bg-white text-slate-700 hover:border-teal-500 hover:text-teal-700'
    ];
  }
</script>

<svelte:head>
  <title>Help Desk & Microsoft 365 Flashcards</title>
  <meta
    name="description"
    content="A SvelteKit flashcard practice app for help desk and Microsoft 365 interview prep."
  />
</svelte:head>

<svelte:window onkeydown={handleWindowKeydown} />

<main class="min-h-screen bg-[#f7f8fb]">
  <section class="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8">
    <header class="mb-3 flex flex-col gap-3 border-slate-200 sm:mb-5 sm:gap-4 sm:border-b sm:pb-5 md:flex-row md:items-end md:justify-between">
      <div class="flex items-center justify-between gap-3">
        <div>
        <p class="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">Help Desk Prep</p>
        <h1 class="mt-2 hidden text-3xl font-bold text-slate-950 sm:block sm:text-4xl">
          Help Desk & Microsoft 365 Flashcards
        </h1>
        </div>

        <button
          type="button"
          bind:this={triggerEl}
          class="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-800 shadow-sm transition duration-300 ease-out hover:border-teal-500 focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-200 sm:hidden"
          aria-expanded={showMobileCategories}
          aria-controls="mobile-category-drawer"
          onclick={() => (showMobileCategories = true)}
        >
          Topics: {selectedCategory}
        </button>
      </div>

      <div class="grid grid-cols-3 gap-2 rounded-lg border border-slate-200 bg-white p-2 shadow-sm">
        <div class="px-3 py-2 text-center">
          <p class="text-xs font-medium text-slate-500">Knew</p>
          <p class="text-xl font-bold text-emerald-700">{knewCount}</p>
        </div>
        <div class="px-3 py-2 text-center">
          <p class="text-xs font-medium text-slate-500">Missed</p>
          <p class="text-xl font-bold text-rose-700">{missedCount}</p>
        </div>
        <div class="px-3 py-2 text-center">
          <p class="text-xs font-medium text-slate-500">Score</p>
          <p class="text-xl font-bold text-slate-950">{scorePercent}%</p>
        </div>
      </div>
    </header>

    {#if showMobileCategories}
      <div id="mobile-category-drawer" class="fixed inset-0 z-50 sm:hidden" role="dialog" aria-modal="true" aria-label="Choose topic">
        <button
          type="button"
          class="absolute inset-0 bg-slate-950/30"
          aria-label="Close topics menu"
          onclick={() => (showMobileCategories = false)}
          transition:fade={{ duration: 240 }}
        ></button>

        <aside
          class="absolute right-0 top-0 flex h-full w-[min(84vw,340px)] flex-col bg-white p-5 shadow-2xl"
          transition:fly={{ x: 340, duration: 420, easing: cubicOut }}
        >
          <div class="mb-5 flex items-center justify-between gap-3">
            <div>
              <p class="text-xs font-bold uppercase tracking-[0.16em] text-teal-700">Topics</p>
              <p class="mt-1 text-sm font-semibold text-slate-500">{selectedCategory}</p>
            </div>
            <button
              type="button"
              bind:this={drawerCloseEl}
              class="rounded-lg border border-slate-200 px-3 py-2 text-sm font-bold text-slate-700 transition duration-300 ease-out hover:border-teal-500 hover:text-teal-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-200"
              onclick={() => (showMobileCategories = false)}
            >
              Close
            </button>
          </div>

          <div class="grid gap-2 overflow-y-auto pb-4">
            {#each categories as category}
              <button
                type="button"
                onclick={() => selectCategory(category)}
                class={drawerCategoryButtonClasses(category)}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            {/each}
          </div>
        </aside>
      </div>
    {/if}

    <div class="mb-3 sm:mb-5">
      <div class="mb-1.5 flex items-center justify-between text-sm font-semibold text-slate-600 sm:mb-2">
        <span>Card {currentIndex + 1} of {totalCards}</span>
        <span>{filteredAnsweredCount} answered in {selectedCategory}</span>
      </div>
      <div class="h-2 overflow-hidden rounded-full bg-slate-200">
        <div
          class="h-full rounded-full bg-teal-600 transition-all duration-700 ease-out"
          style={`width: ${progressPercent}%`}
        ></div>
      </div>
    </div>

    <div class="mb-4 hidden flex-wrap gap-2 sm:flex">
        {#each categories as category}
        <button
          type="button"
          onclick={() => selectCategory(category)}
          class={categoryButtonClasses(category)}
          aria-pressed={selectedCategory === category}
        >
          {category}
        </button>
        {/each}
    </div>

    <section class="grid flex-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
      <div class="grid">
        {#if currentCard}
        <div
          class={[
            'group w-full cursor-pointer rounded-lg p-0 text-left [perspective:1400px] focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-200'
          ]}
          role="button"
          tabindex="0"
          aria-label={isFlipped ? 'Show question side' : 'Show answer side'}
          onclick={flipCard}
          onkeydown={handleCardKeydown}
        >
          <div
            class={[
              'grid w-full transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d]',
              isFlipped ? '[transform:rotateY(180deg)]' : ''
            ]}
          >
            <article
              class="[grid-area:1/1] flex min-h-[360px] flex-col justify-between rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition-shadow duration-500 ease-out [backface-visibility:hidden] group-hover:shadow-lg sm:min-h-[430px] sm:p-8"
            >
              <div>
                <div class="mb-8 flex items-center justify-between gap-3">
                  <span class="rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-800">
                    {currentCard.category}
                  </span>
                  <span class="text-sm font-medium text-slate-400">Question</span>
                </div>
                <h2 class="text-2xl font-bold leading-tight text-slate-950 sm:text-4xl">
                  {currentCard.question}
                </h2>
              </div>
              <p class="mt-8 text-sm font-medium text-slate-500">Click the card to reveal the answer</p>
            </article>

            <article
              class="[grid-area:1/1] flex min-h-[360px] flex-col justify-between rounded-lg border border-teal-200 bg-[#eefcf8] p-6 shadow-soft transition-shadow duration-500 ease-out [backface-visibility:hidden] [transform:rotateY(180deg)] group-hover:shadow-lg sm:min-h-[430px] sm:p-8"
            >
              <div>
                <div class="mb-8 flex items-center justify-between gap-3">
                  <span class="rounded-full bg-white px-3 py-1 text-sm font-semibold text-teal-800">
                    {currentCard.category}
                  </span>
                  <span class="text-sm font-medium text-teal-700">Answer</span>
                </div>
                <p class="text-lg font-semibold leading-relaxed text-slate-900 sm:text-2xl">
                  {currentCard.answer}
                </p>
              </div>
              <div class="mt-8 grid gap-4">
                <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div class="grid grid-cols-2 gap-2 sm:flex sm:flex-row">
                    <button
                      type="button"
                      class="rounded-lg bg-emerald-600 px-4 py-3 text-sm font-bold text-white transition duration-300 ease-out hover:bg-emerald-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
                      onclick={(event) => markCardFromAnswer(event, 'knew')}
                    >
                      I knew this
                    </button>
                    <button
                      type="button"
                      class="rounded-lg bg-rose-600 px-4 py-3 text-sm font-bold text-white transition duration-300 ease-out hover:bg-rose-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-200"
                      onclick={(event) => markCardFromAnswer(event, 'missed')}
                    >
                      Missed this
                    </button>
                  </div>
                  <div class="grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:ml-auto">
                    <button
                      type="button"
                      class="rounded-lg bg-slate-950 px-4 py-3 text-sm font-bold text-white transition duration-300 ease-out hover:bg-slate-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-300"
                      onclick={(event) => openInAIFromCard(event, chatGptUrl)}
                    >
                      Open in ChatGPT
                    </button>
                    <button
                      type="button"
                      class="rounded-lg bg-orange-600 px-4 py-3 text-sm font-bold text-white transition duration-300 ease-out hover:bg-orange-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
                      onclick={(event) => openInAIFromCard(event, claudeUrl)}
                    >
                      Open in Claude
                    </button>
                  </div>
                </div>
                <p class="text-center text-sm font-medium text-teal-800">
                  Click the card to return to the question
                </p>
              </div>
            </article>
          </div>
        </div>

        <div
          class={[
            'grid overflow-hidden transition-[grid-template-rows,margin-top,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
            isFlipped ? 'mt-4 grid-rows-[1fr] opacity-100' : 'mt-0 grid-rows-[0fr] opacity-0'
          ]}
          aria-hidden={!isFlipped}
          inert={!isFlipped}
        >
          <div class="min-h-0 overflow-hidden">
            <section class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div class="grid gap-4 md:grid-cols-[minmax(0,1fr)_220px]">
                <div>
                  <p class="text-sm font-bold uppercase tracking-[0.14em] text-teal-700">Learn more</p>
                  <h3 class="mt-2 text-lg font-bold text-slate-950">Study focus</h3>
                  <p class="mt-2 text-sm leading-6 text-slate-600">{studyFocus}</p>
                </div>

                <div class="grid content-start gap-2">
                  <a
                    class="rounded-lg border border-slate-300 px-4 py-3 text-center text-sm font-bold text-slate-800 transition duration-300 ease-out hover:border-teal-600 hover:bg-teal-50 hover:text-teal-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-200"
                    href={resourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {resourceLabel}
                  </a>
                  <button
                    type="button"
                    class="rounded-lg bg-slate-950 px-4 py-3 text-sm font-bold text-white transition duration-300 ease-out hover:bg-slate-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-300"
                    onclick={copyPrompt}
                  >
                    {copiedPrompt ? 'Prompt copied' : copyError ? 'Copy failed' : 'Copy ChatGPT prompt'}
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
        {:else}
          <div class="flex min-h-[360px] flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center sm:min-h-[430px]">
            <p class="text-lg font-semibold text-slate-900">No cards in this category</p>
            <p class="mt-2 text-sm text-slate-500">Pick another topic to keep practicing.</p>
          </div>
        {/if}
      </div>

      <aside class="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <div class="grid grid-cols-2 gap-2">
          <button class="control-button" onclick={previousCard}>Previous</button>
          <button class="control-button" onclick={nextCard}>Next</button>
          <button class="control-button" onclick={randomCard}>Random</button>
          <button class="control-button" onclick={resetSession}>Reset</button>
        </div>

        <div class="mt-5 rounded-lg bg-slate-50 p-4">
          <p class="text-sm font-semibold text-slate-900">Session progress</p>
          <dl class="mt-3 grid gap-2 text-sm text-slate-600">
            <div class="flex justify-between">
              <dt>Remaining</dt>
              <dd class="font-semibold text-slate-900">{totalCards - filteredAnsweredCount}</dd>
            </div>
            <div class="flex justify-between">
              <dt>Accuracy</dt>
              <dd class="font-semibold text-slate-900">{scorePercent}%</dd>
            </div>
          </dl>
        </div>
      </aside>
    </section>
  </section>
</main>

<style>
  .control-button {
    border-radius: 0.5rem;
    border: 1px solid rgb(203 213 225);
    background: white;
    padding: 0.75rem 0.85rem;
    font-size: 0.875rem;
    font-weight: 700;
    color: rgb(30 41 59);
    transition:
      background-color 160ms ease,
      border-color 160ms ease,
      color 160ms ease;
  }

  .control-button:hover {
    border-color: rgb(13 148 136);
    background: rgb(240 253 250);
    color: rgb(15 118 110);
  }

  .control-button:focus {
    outline: none;
  }

  .control-button:focus-visible {
    box-shadow: 0 0 0 4px rgb(204 251 241);
  }
</style>
