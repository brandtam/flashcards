export type FlashcardCategory =
  | 'Microsoft 365 Basics'
  | 'Microsoft 365 Intermediate'
  | 'Microsoft 365 Advanced'
  | 'Outlook'
  | 'Teams'
  | 'Windows'
  | 'Security'
  | 'Customer Service'
  | 'Scenarios';

export type Flashcard = {
  id: number;
  category: FlashcardCategory;
  question: string;
  answer: string;
};

export const flashcards: Flashcard[] = [
  {
    id: 1,
    category: 'Microsoft 365 Basics',
    question: 'What is the difference between Microsoft 365 and Office 2021?',
    answer:
      'Microsoft 365 is a subscription that includes cloud services, regular updates, OneDrive, Exchange Online, Teams, and web apps. Office 2021 is a one-time purchase of desktop apps with fewer cloud features and no continuous feature updates.'
  },
  {
    id: 2,
    category: 'Microsoft 365 Basics',
    question: 'A user says they cannot open Word online. What should you check first?',
    answer:
      'Confirm their Microsoft 365 license includes Office for the web, verify they can sign in at office.com, check service health, try a different browser or private window, and confirm the file permissions.'
  },
  {
    id: 3,
    category: 'Microsoft 365 Basics',
    question: 'What is OneDrive for Business used for?',
    answer:
      'It stores a user’s work files in Microsoft 365, syncs them across devices, supports file sharing, version history, and recovery, and integrates with Teams and SharePoint.'
  },
  {
    id: 4,
    category: 'Microsoft 365 Basics',
    question: 'Where would an admin check for Microsoft 365 outages?',
    answer:
      'In the Microsoft 365 admin center under Health > Service health. The status page can show advisories, incidents, affected services, impact, and updates from Microsoft.'
  },
  {
    id: 5,
    category: 'Microsoft 365 Basics',
    question: 'What does assigning a Microsoft 365 license do?',
    answer:
      'It grants a user access to the services included in that SKU, such as Exchange Online, Teams, SharePoint, OneDrive, Office apps, and security features depending on the plan.'
  },
  {
    id: 31,
    category: 'Microsoft 365 Basics',
    question: 'What is the Microsoft 365 admin center used for?',
    answer:
      'It is the main portal for managing users, licenses, groups, domains, billing, service health, support tickets, and many organization-wide Microsoft 365 settings.'
  },
  {
    id: 32,
    category: 'Microsoft 365 Basics',
    question: 'What is Microsoft Entra ID?',
    answer:
      'Microsoft Entra ID, formerly Azure Active Directory, is Microsoft’s cloud identity service. It manages users, groups, authentication, app access, MFA, and sign-in controls for Microsoft 365.'
  },
  {
    id: 33,
    category: 'Microsoft 365 Basics',
    question: 'What is Exchange Online?',
    answer:
      'Exchange Online is the Microsoft 365 cloud email and calendar service. It hosts mailboxes, calendars, contacts, shared mailboxes, mail flow, retention, and many Outlook-related services.'
  },
  {
    id: 34,
    category: 'Microsoft 365 Basics',
    question: 'What is SharePoint Online commonly used for?',
    answer:
      'SharePoint Online is used for team sites, document libraries, intranet pages, permissions, collaboration, version history, and the storage backend for standard Teams channel files.'
  },
  {
    id: 35,
    category: 'Microsoft 365 Basics',
    question: 'What is the difference between OneDrive and SharePoint?',
    answer:
      'OneDrive is mainly for an individual user’s work files. SharePoint is for shared team, department, or company content with site-level structure, document libraries, and group permissions.'
  },
  {
    id: 36,
    category: 'Microsoft 365 Intermediate',
    question: 'A user has a license assigned but still cannot access Outlook. What should you check?',
    answer:
      'Confirm the Exchange Online service plan is enabled, sign-in is allowed, the mailbox exists, provisioning has completed, there are no conditional access blocks, and service health is normal.'
  },
  {
    id: 37,
    category: 'Microsoft 365 Intermediate',
    question: 'What is a Microsoft 365 group?',
    answer:
      'It is a collaboration identity that can provide a shared mailbox, calendar, SharePoint site, Planner plan, and Teams workspace depending on how it is used.'
  },
  {
    id: 38,
    category: 'Microsoft 365 Intermediate',
    question: 'What is the difference between a security group and a Microsoft 365 group?',
    answer:
      'A security group is mainly for assigning permissions or access. A Microsoft 365 group adds collaboration resources like a mailbox, calendar, and SharePoint site.'
  },
  {
    id: 39,
    category: 'Microsoft 365 Intermediate',
    question: 'What is mailbox delegation?',
    answer:
      'Mailbox delegation lets one user access or act on another mailbox using permissions such as Full Access, Send As, or Send on Behalf.'
  },
  {
    id: 40,
    category: 'Microsoft 365 Intermediate',
    question: 'What is the difference between Send As and Send on Behalf?',
    answer:
      'Send As makes the message appear as if it came directly from the mailbox. Send on Behalf shows that one user sent the message on behalf of another mailbox or group.'
  },
  {
    id: 41,
    category: 'Microsoft 365 Intermediate',
    question: 'What is a mail flow rule?',
    answer:
      'A mail flow rule, also called a transport rule, applies actions to messages in Exchange Online based on conditions such as sender, recipient, keywords, attachments, or sensitivity.'
  },
  {
    id: 42,
    category: 'Microsoft 365 Intermediate',
    question: 'A user can access Microsoft 365 in the browser but not desktop apps. What might you check?',
    answer:
      'Check Office activation, account sign-in, license includes desktop apps, cached credentials, device date/time, network proxy, updates, and whether removing and re-adding the work account helps.'
  },
  {
    id: 43,
    category: 'Microsoft 365 Intermediate',
    question: 'What is self-service password reset?',
    answer:
      'Self-service password reset lets users reset or unlock their own account after verifying identity with approved authentication methods, reducing help desk password reset volume.'
  },
  {
    id: 44,
    category: 'Microsoft 365 Intermediate',
    question: 'What is a retention policy in Microsoft 365?',
    answer:
      'A retention policy controls how long content is kept or deleted across services such as Exchange, SharePoint, OneDrive, and Teams, often for compliance or business requirements.'
  },
  {
    id: 45,
    category: 'Microsoft 365 Intermediate',
    question: 'What is the purpose of the Microsoft 365 message center?',
    answer:
      'The message center announces upcoming Microsoft 365 changes, new features, retirements, admin actions, and rollout timelines that may affect users or support teams.'
  },
  {
    id: 46,
    category: 'Microsoft 365 Advanced',
    question: 'What is Conditional Access used for in Microsoft 365?',
    answer:
      'Conditional Access applies access decisions based on signals such as user, device compliance, location, app, risk, and authentication strength. It can require MFA, block access, or limit sessions.'
  },
  {
    id: 47,
    category: 'Microsoft 365 Advanced',
    question: 'What is the difference between authentication and authorization?',
    answer:
      'Authentication proves who the user is. Authorization determines what that authenticated user is allowed to access or do.'
  },
  {
    id: 48,
    category: 'Microsoft 365 Advanced',
    question: 'What are audit logs useful for in Microsoft 365?',
    answer:
      'Audit logs help investigate user and admin activity such as sign-ins, file access, mailbox actions, sharing changes, group changes, and security events, depending on licensing and retention.'
  },
  {
    id: 49,
    category: 'Microsoft 365 Advanced',
    question: 'What is Microsoft Purview?',
    answer:
      'Microsoft Purview is a set of compliance, data protection, governance, audit, eDiscovery, retention, and information protection tools used to manage organizational data risk.'
  },
  {
    id: 50,
    category: 'Microsoft 365 Advanced',
    question: 'What is eDiscovery used for?',
    answer:
      'eDiscovery helps authorized staff search, preserve, review, and export organization content for legal, compliance, HR, or investigation needs.'
  },
  {
    id: 51,
    category: 'Microsoft 365 Advanced',
    question: 'What is the principle of least privilege?',
    answer:
      'Users and admins should receive only the access needed to do their job, for only as long as needed. This limits damage from mistakes, compromised accounts, or insider risk.'
  },
  {
    id: 52,
    category: 'Microsoft 365 Advanced',
    question: 'What should you check when a user is blocked by Conditional Access?',
    answer:
      'Review the sign-in logs, applied Conditional Access policies, failure reason, device compliance, location, MFA status, client app, and whether the user is in a targeted group.'
  },
  {
    id: 53,
    category: 'Microsoft 365 Advanced',
    question: 'What is the difference between a guest user and a member user in Entra ID?',
    answer:
      'A member usually belongs to the organization. A guest is an external identity invited for collaboration, often with more limited default permissions and different lifecycle controls.'
  },
  {
    id: 54,
    category: 'Microsoft 365 Advanced',
    question: 'Why might a user be asked for MFA repeatedly?',
    answer:
      'Possible causes include browser privacy settings, cleared cookies, risky sign-ins, Conditional Access sign-in frequency, unsupported clients, device not trusted, or token/session policy changes.'
  },
  {
    id: 55,
    category: 'Microsoft 365 Advanced',
    question: 'What are sign-in logs used for when troubleshooting Microsoft 365 access?',
    answer:
      'Sign-in logs show authentication attempts, success or failure, error codes, MFA results, device details, location, client app, and Conditional Access results.'
  },
  {
    id: 6,
    category: 'Outlook',
    question: 'A user is not receiving email in Outlook. What are your first troubleshooting steps?',
    answer:
      'Check Outlook web access, mailbox storage, junk/quarantine, mail flow rules, focused inbox, connectivity, service health, and whether the sender received an NDR. Compare Outlook desktop with webmail to isolate the client.'
  },
  {
    id: 7,
    category: 'Outlook',
    question: 'What is an Outlook profile?',
    answer:
      'It is a local configuration that stores account settings, data file references, and cached Exchange settings. Recreating a profile can fix corrupted client-side Outlook issues.'
  },
  {
    id: 8,
    category: 'Outlook',
    question: 'What does Cached Exchange Mode do?',
    answer:
      'It keeps a local copy of mailbox data in an OST file so Outlook can perform faster and continue working with limited functionality when offline.'
  },
  {
    id: 9,
    category: 'Outlook',
    question: 'A user deleted an important email. How can you help recover it?',
    answer:
      'Check Deleted Items, Recover Deleted Items, retention policies, litigation hold or eDiscovery if applicable, and backups or third-party archiving based on company policy.'
  },
  {
    id: 10,
    category: 'Outlook',
    question: 'What is the difference between a shared mailbox and a distribution list?',
    answer:
      'A shared mailbox is a mailbox multiple users can access and send from. A distribution list forwards mail to members but does not store messages in a shared mailbox.'
  },
  {
    id: 11,
    category: 'Teams',
    question: 'A user cannot hear audio in a Teams meeting. What should you check?',
    answer:
      'Verify the selected speaker and microphone in Teams settings, OS sound settings, mute state, browser or app permissions, headset connection, driver updates, and whether audio works in another app.'
  },
  {
    id: 12,
    category: 'Teams',
    question: 'What is the difference between a Team and a Channel?',
    answer:
      'A Team is the workspace for a group of people. Channels organize conversations, files, tabs, and meetings by topic within that Team.'
  },
  {
    id: 13,
    category: 'Teams',
    question: 'Where are files shared in a Teams channel stored?',
    answer:
      'Standard channel files are stored in the Team’s SharePoint site. One-to-one and group chat files are stored in the sender’s OneDrive and shared with chat participants.'
  },
  {
    id: 14,
    category: 'Teams',
    question: 'A user cannot create a Teams meeting in Outlook. What might be wrong?',
    answer:
      'The Teams Meeting add-in may be disabled, Outlook or Teams may need restart or sign-in, the user may lack the correct license, or the Office installation may need repair/update.'
  },
  {
    id: 15,
    category: 'Windows',
    question: 'What does ipconfig /all show?',
    answer:
      'It displays detailed network adapter configuration including IP address, subnet mask, default gateway, DNS servers, DHCP status, MAC address, and lease information.'
  },
  {
    id: 16,
    category: 'Windows',
    question: 'A Windows laptop cannot connect to Wi-Fi. What steps would you take?',
    answer:
      'Check airplane mode, Wi-Fi toggle, known network credentials, signal strength, adapter status, drivers, DHCP, IP configuration, DNS, event logs, and whether other devices can connect.'
  },
  {
    id: 17,
    category: 'Windows',
    question: 'What is BitLocker?',
    answer:
      'BitLocker is Microsoft’s full-disk encryption feature. It protects data if a device is lost or stolen and may require a recovery key after hardware, firmware, or boot changes.'
  },
  {
    id: 18,
    category: 'Windows',
    question: 'How would you troubleshoot a slow Windows computer?',
    answer:
      'Check Task Manager for CPU, memory, disk, and startup load; confirm free disk space; review updates, malware alerts, event logs, browser extensions, and recent software changes.'
  },
  {
    id: 19,
    category: 'Windows',
    question: 'What is the difference between restart and shutdown in modern Windows?',
    answer:
      'Restart fully reloads the OS session. Shutdown may use Fast Startup, which hibernates parts of the kernel session, so restart is often better for troubleshooting.'
  },
  {
    id: 20,
    category: 'Security',
    question: 'What is multi-factor authentication?',
    answer:
      'MFA requires more than one verification factor, such as a password plus an authenticator app prompt, hardware key, code, or biometric factor, reducing risk from stolen passwords.'
  },
  {
    id: 21,
    category: 'Security',
    question: 'A user reports a suspicious email. What should you do?',
    answer:
      'Tell them not to click links or open attachments, collect headers or the message safely, report it through the approved phishing process, check if credentials were entered, and escalate if needed.'
  },
  {
    id: 22,
    category: 'Security',
    question: 'What is conditional access?',
    answer:
      'It is a Microsoft Entra policy system that controls access based on signals like user, location, device compliance, app, sign-in risk, and MFA requirements.'
  },
  {
    id: 23,
    category: 'Security',
    question: 'Why should help desk verify a caller’s identity before resetting a password?',
    answer:
      'Password resets are high-risk. Identity verification helps prevent social engineering and unauthorized account takeover.'
  },
  {
    id: 24,
    category: 'Customer Service',
    question: 'How do you handle an upset user whose issue is blocking their work?',
    answer:
      'Acknowledge the impact, stay calm, ask focused questions, set expectations, explain next steps plainly, give updates, and escalate according to priority and impact.'
  },
  {
    id: 25,
    category: 'Customer Service',
    question: 'What information should you capture in a help desk ticket?',
    answer:
      'User, contact info, device, location, issue summary, exact error messages, timeline, business impact, troubleshooting performed, screenshots/logs, priority, and next action.'
  },
  {
    id: 26,
    category: 'Customer Service',
    question: 'How do you explain a technical fix to a non-technical user?',
    answer:
      'Use plain language, focus on the user’s goal, avoid unnecessary jargon, confirm the result, and give one or two practical prevention tips if relevant.'
  },
  {
    id: 27,
    category: 'Scenarios',
    question: 'A new hire cannot access Teams, Outlook, or OneDrive on their first day. What do you check?',
    answer:
      'Confirm the account is active, license assigned, password/MFA enrollment complete, group membership synced, sign-in not blocked, device time is correct, and no service outage exists.'
  },
  {
    id: 28,
    category: 'Scenarios',
    question: 'A user says “the internet is down,” but only one website fails. How do you respond?',
    answer:
      'Clarify scope, test other sites, try another browser, clear cache or use private browsing, check DNS, ping or nslookup if appropriate, verify the website status, and document findings.'
  },
  {
    id: 29,
    category: 'Scenarios',
    question: 'A user cannot sign in after changing their password. What could be happening?',
    answer:
      'They may be using the old password, cached credentials, locked account, MFA issue, password sync delay, incorrect username, stale Outlook/mobile password, or device not connected to the domain/VPN.'
  },
  {
    id: 30,
    category: 'Scenarios',
    question: 'A VIP user reports missing calendar appointments. What is your approach?',
    answer:
      'Treat it with urgency, gather examples and timing, compare Outlook desktop with web, check delegates, rules, mobile sync, deleted item recovery, service health, audit logs if available, and escalate with clear notes.'
  }
];
