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
    id: 6,
    category: 'Microsoft 365 Basics',
    question: 'What is the Microsoft 365 admin center used for?',
    answer:
      'It is the main portal for managing users, licenses, groups, domains, billing, service health, support tickets, and many organization-wide Microsoft 365 settings.'
  },
  {
    id: 7,
    category: 'Microsoft 365 Basics',
    question: 'What is Microsoft Entra ID?',
    answer:
      'Microsoft Entra ID, formerly Azure Active Directory, is Microsoft’s cloud identity service. It manages users, groups, authentication, app access, MFA, and sign-in controls for Microsoft 365.'
  },
  {
    id: 8,
    category: 'Microsoft 365 Basics',
    question: 'What is Exchange Online?',
    answer:
      'Exchange Online is the Microsoft 365 cloud email and calendar service. It hosts mailboxes, calendars, contacts, shared mailboxes, mail flow, retention, and many Outlook-related services.'
  },
  {
    id: 9,
    category: 'Microsoft 365 Basics',
    question: 'What is SharePoint Online commonly used for?',
    answer:
      'SharePoint Online is used for team sites, document libraries, intranet pages, permissions, collaboration, version history, and the storage backend for standard Teams channel files.'
  },
  {
    id: 10,
    category: 'Microsoft 365 Basics',
    question: 'What is the difference between OneDrive and SharePoint?',
    answer:
      'OneDrive is mainly for an individual user’s work files. SharePoint is for shared team, department, or company content with site-level structure, document libraries, and group permissions.'
  },
  {
    id: 11,
    category: 'Microsoft 365 Intermediate',
    question: 'A user has a license assigned but still cannot access Outlook. What should you check?',
    answer:
      'Confirm the Exchange Online service plan is enabled, sign-in is allowed, the mailbox exists, provisioning has completed, there are no conditional access blocks, and service health is normal.'
  },
  {
    id: 12,
    category: 'Microsoft 365 Intermediate',
    question: 'What is a Microsoft 365 group?',
    answer:
      'It is a collaboration identity that can provide a shared mailbox, calendar, SharePoint site, Planner plan, and Teams workspace depending on how it is used.'
  },
  {
    id: 13,
    category: 'Microsoft 365 Intermediate',
    question: 'What is the difference between a security group and a Microsoft 365 group?',
    answer:
      'A security group is mainly for assigning permissions or access. A Microsoft 365 group adds collaboration resources like a mailbox, calendar, and SharePoint site.'
  },
  {
    id: 14,
    category: 'Microsoft 365 Intermediate',
    question: 'What is mailbox delegation?',
    answer:
      'Mailbox delegation lets one user access or act on another mailbox using permissions such as Full Access, Send As, or Send on Behalf.'
  },
  {
    id: 15,
    category: 'Microsoft 365 Intermediate',
    question: 'What is the difference between Send As and Send on Behalf?',
    answer:
      'Send As makes the message appear as if it came directly from the mailbox. Send on Behalf shows that one user sent the message on behalf of another mailbox or group.'
  },
  {
    id: 16,
    category: 'Microsoft 365 Intermediate',
    question: 'What is a mail flow rule?',
    answer:
      'A mail flow rule, also called a transport rule, applies actions to messages in Exchange Online based on conditions such as sender, recipient, keywords, attachments, or sensitivity.'
  },
  {
    id: 17,
    category: 'Microsoft 365 Intermediate',
    question: 'A user can access Microsoft 365 in the browser but not desktop apps. What might you check?',
    answer:
      'Check Office activation, account sign-in, license includes desktop apps, cached credentials, device date/time, network proxy, updates, and whether removing and re-adding the work account helps.'
  },
  {
    id: 18,
    category: 'Microsoft 365 Intermediate',
    question: 'What is self-service password reset?',
    answer:
      'Self-service password reset lets users reset or unlock their own account after verifying identity with approved authentication methods, reducing help desk password reset volume.'
  },
  {
    id: 19,
    category: 'Microsoft 365 Intermediate',
    question: 'What is a retention policy in Microsoft 365?',
    answer:
      'A retention policy controls how long content is kept or deleted across services such as Exchange, SharePoint, OneDrive, and Teams, often for compliance or business requirements.'
  },
  {
    id: 20,
    category: 'Microsoft 365 Intermediate',
    question: 'What is the purpose of the Microsoft 365 message center?',
    answer:
      'The message center announces upcoming Microsoft 365 changes, new features, retirements, admin actions, and rollout timelines that may affect users or support teams.'
  },
  {
    id: 21,
    category: 'Microsoft 365 Advanced',
    question: 'What is Conditional Access used for in Microsoft 365?',
    answer:
      'Conditional Access applies access decisions based on signals such as user, device compliance, location, app, risk, and authentication strength. It can require MFA, block access, or limit sessions.'
  },
  {
    id: 22,
    category: 'Microsoft 365 Advanced',
    question: 'What is the difference between authentication and authorization?',
    answer:
      'Authentication proves who the user is. Authorization determines what that authenticated user is allowed to access or do.'
  },
  {
    id: 23,
    category: 'Microsoft 365 Advanced',
    question: 'What are audit logs useful for in Microsoft 365?',
    answer:
      'Audit logs help investigate user and admin activity such as sign-ins, file access, mailbox actions, sharing changes, group changes, and security events, depending on licensing and retention.'
  },
  {
    id: 24,
    category: 'Microsoft 365 Advanced',
    question: 'What is Microsoft Purview?',
    answer:
      'Microsoft Purview is a set of compliance, data protection, governance, audit, eDiscovery, retention, and information protection tools used to manage organizational data risk.'
  },
  {
    id: 25,
    category: 'Microsoft 365 Advanced',
    question: 'What is eDiscovery used for?',
    answer:
      'eDiscovery helps authorized staff search, preserve, review, and export organization content for legal, compliance, HR, or investigation needs.'
  },
  {
    id: 26,
    category: 'Microsoft 365 Advanced',
    question: 'What is the principle of least privilege?',
    answer:
      'Users and admins should receive only the access needed to do their job, for only as long as needed. This limits damage from mistakes, compromised accounts, or insider risk.'
  },
  {
    id: 27,
    category: 'Microsoft 365 Advanced',
    question: 'What should you check when a user is blocked by Conditional Access?',
    answer:
      'Review the sign-in logs, applied Conditional Access policies, failure reason, device compliance, location, MFA status, client app, and whether the user is in a targeted group.'
  },
  {
    id: 28,
    category: 'Microsoft 365 Advanced',
    question: 'What is the difference between a guest user and a member user in Entra ID?',
    answer:
      'A member usually belongs to the organization. A guest is an external identity invited for collaboration, often with more limited default permissions and different lifecycle controls.'
  },
  {
    id: 29,
    category: 'Microsoft 365 Advanced',
    question: 'Why might a user be asked for MFA repeatedly?',
    answer:
      'Possible causes include browser privacy settings, cleared cookies, risky sign-ins, Conditional Access sign-in frequency, unsupported clients, device not trusted, or token/session policy changes.'
  },
  {
    id: 30,
    category: 'Microsoft 365 Advanced',
    question: 'What are sign-in logs used for when troubleshooting Microsoft 365 access?',
    answer:
      'Sign-in logs show authentication attempts, success or failure, error codes, MFA results, device details, location, client app, and Conditional Access results.'
  },
  {
    id: 31,
    category: 'Outlook',
    question: 'A user is not receiving email in Outlook. What are your first troubleshooting steps?',
    answer:
      'Check Outlook web access, mailbox storage, junk/quarantine, mail flow rules, focused inbox, connectivity, service health, and whether the sender received an NDR. Compare Outlook desktop with webmail to isolate the client.'
  },
  {
    id: 32,
    category: 'Outlook',
    question: 'What is an Outlook profile?',
    answer:
      'It is a local configuration that stores account settings, data file references, and cached Exchange settings. Recreating a profile can fix corrupted client-side Outlook issues.'
  },
  {
    id: 33,
    category: 'Outlook',
    question: 'What does Cached Exchange Mode do?',
    answer:
      'It keeps a local copy of mailbox data in an OST file so Outlook can perform faster and continue working with limited functionality when offline.'
  },
  {
    id: 34,
    category: 'Outlook',
    question: 'A user deleted an important email. How can you help recover it?',
    answer:
      'Check Deleted Items, Recover Deleted Items, retention policies, litigation hold or eDiscovery if applicable, and backups or third-party archiving based on company policy.'
  },
  {
    id: 35,
    category: 'Outlook',
    question: 'What is the difference between a shared mailbox and a distribution list?',
    answer:
      'A shared mailbox is a mailbox multiple users can access and send from. A distribution list forwards mail to members but does not store messages in a shared mailbox.'
  },
  {
    id: 36,
    category: 'Teams',
    question: 'A user cannot hear audio in a Teams meeting. What should you check?',
    answer:
      'Verify the selected speaker and microphone in Teams settings, OS sound settings, mute state, browser or app permissions, headset connection, driver updates, and whether audio works in another app.'
  },
  {
    id: 37,
    category: 'Teams',
    question: 'What is the difference between a Team and a Channel?',
    answer:
      'A Team is the workspace for a group of people. Channels organize conversations, files, tabs, and meetings by topic within that Team.'
  },
  {
    id: 38,
    category: 'Teams',
    question: 'Where are files shared in a Teams channel stored?',
    answer:
      'Standard channel files are stored in the Team’s SharePoint site. One-to-one and group chat files are stored in the sender’s OneDrive and shared with chat participants.'
  },
  {
    id: 39,
    category: 'Teams',
    question: 'A user cannot create a Teams meeting in Outlook. What might be wrong?',
    answer:
      'The Teams Meeting add-in may be disabled, Outlook or Teams may need restart or sign-in, the user may lack the correct license, or the Office installation may need repair/update.'
  },
  {
    id: 40,
    category: 'Windows',
    question: 'What does ipconfig /all show?',
    answer:
      'It displays detailed network adapter configuration including IP address, subnet mask, default gateway, DNS servers, DHCP status, MAC address, and lease information.'
  },
  {
    id: 41,
    category: 'Windows',
    question: 'A Windows laptop cannot connect to Wi-Fi. What steps would you take?',
    answer:
      'Check airplane mode, Wi-Fi toggle, known network credentials, signal strength, adapter status, drivers, DHCP, IP configuration, DNS, event logs, and whether other devices can connect.'
  },
  {
    id: 42,
    category: 'Windows',
    question: 'What is BitLocker?',
    answer:
      'BitLocker is Microsoft’s full-disk encryption feature. It protects data if a device is lost or stolen and may require a recovery key after hardware, firmware, or boot changes.'
  },
  {
    id: 43,
    category: 'Windows',
    question: 'How would you troubleshoot a slow Windows computer?',
    answer:
      'Check Task Manager for CPU, memory, disk, and startup load; confirm free disk space; review updates, malware alerts, event logs, browser extensions, and recent software changes.'
  },
  {
    id: 44,
    category: 'Windows',
    question: 'What is the difference between restart and shutdown in modern Windows?',
    answer:
      'Restart fully reloads the OS session. Shutdown may use Fast Startup, which hibernates parts of the kernel session, so restart is often better for troubleshooting.'
  },
  {
    id: 45,
    category: 'Security',
    question: 'What is multi-factor authentication?',
    answer:
      'MFA requires more than one verification factor, such as a password plus an authenticator app prompt, hardware key, code, or biometric factor, reducing risk from stolen passwords.'
  },
  {
    id: 46,
    category: 'Security',
    question: 'A user reports a suspicious email. What should you do?',
    answer:
      'Tell them not to click links or open attachments, collect headers or the message safely, report it through the approved phishing process, check if credentials were entered, and escalate if needed.'
  },
  {
    id: 47,
    category: 'Security',
    question: 'What is conditional access?',
    answer:
      'It is a Microsoft Entra policy system that controls access based on signals like user, location, device compliance, app, sign-in risk, and MFA requirements.'
  },
  {
    id: 48,
    category: 'Security',
    question: 'Why should help desk verify a caller’s identity before resetting a password?',
    answer:
      'Password resets are high-risk. Identity verification helps prevent social engineering and unauthorized account takeover.'
  },
  {
    id: 49,
    category: 'Customer Service',
    question: 'How do you handle an upset user whose issue is blocking their work?',
    answer:
      'Acknowledge the impact, stay calm, ask focused questions, set expectations, explain next steps plainly, give updates, and escalate according to priority and impact.'
  },
  {
    id: 50,
    category: 'Customer Service',
    question: 'What information should you capture in a help desk ticket?',
    answer:
      'User, contact info, device, location, issue summary, exact error messages, timeline, business impact, troubleshooting performed, screenshots/logs, priority, and next action.'
  },
  {
    id: 51,
    category: 'Customer Service',
    question: 'How do you explain a technical fix to a non-technical user?',
    answer:
      'Use plain language, focus on the user’s goal, avoid unnecessary jargon, confirm the result, and give one or two practical prevention tips if relevant.'
  },
  {
    id: 52,
    category: 'Scenarios',
    question: 'A new hire cannot access Teams, Outlook, or OneDrive on their first day. What do you check?',
    answer:
      'Confirm the account is active, license assigned, password/MFA enrollment complete, group membership synced, sign-in not blocked, device time is correct, and no service outage exists.'
  },
  {
    id: 53,
    category: 'Scenarios',
    question: 'A user says “the internet is down,” but only one website fails. How do you respond?',
    answer:
      'Clarify scope, test other sites, try another browser, clear cache or use private browsing, check DNS, ping or nslookup if appropriate, verify the website status, and document findings.'
  },
  {
    id: 54,
    category: 'Scenarios',
    question: 'A user cannot sign in after changing their password. What could be happening?',
    answer:
      'They may be using the old password, cached credentials, locked account, MFA issue, password sync delay, incorrect username, stale Outlook/mobile password, or device not connected to the domain/VPN.'
  },
  {
    id: 55,
    category: 'Scenarios',
    question: 'A VIP user reports missing calendar appointments. What is your approach?',
    answer:
      'Treat it with urgency, gather examples and timing, compare Outlook desktop with web, check delegates, rules, mobile sync, deleted item recovery, service health, audit logs if available, and escalate with clear notes.'
  },
  {
    id: 56,
    category: 'Microsoft 365 Basics',
    question: 'What is a Microsoft 365 tenant?',
    answer:
      'A tenant is a dedicated instance of Microsoft 365 services tied to an organization, identified by a default onmicrosoft.com domain. It holds users, licenses, mailboxes, sites, and configuration for that organization.'
  },
  {
    id: 57,
    category: 'Microsoft 365 Basics',
    question: 'What is the difference between a Global Administrator and a service-specific admin?',
    answer:
      'Global Administrator has full access across the tenant. Service admins (Exchange, Teams, SharePoint, User admin, etc.) have scoped permissions limited to their service. Least privilege favors service-scoped roles.'
  },
  {
    id: 58,
    category: 'Microsoft 365 Basics',
    question: 'How do you find which licenses are assigned to a user?',
    answer:
      'In the Microsoft 365 admin center, open the user and check Licenses and apps. You can also use Microsoft Graph or PowerShell (Get-MgUserLicenseDetail) to list assignments and individual service plans.'
  },
  {
    id: 59,
    category: 'Microsoft 365 Basics',
    question: 'What is the difference between Microsoft 365 Apps and Office for the web?',
    answer:
      'Microsoft 365 Apps are the installed desktop applications. Office for the web is the browser version with a reduced feature set. Some licenses include only one or the other.'
  },
  {
    id: 60,
    category: 'Microsoft 365 Basics',
    question: 'What is OneDrive Files On-Demand?',
    answer:
      'A feature that shows OneDrive files in File Explorer without downloading them until opened. It saves disk space but requires connectivity to access cloud-only files.'
  },
  {
    id: 61,
    category: 'Microsoft 365 Basics',
    question: 'What is the difference between a work/school account and a personal Microsoft account?',
    answer:
      'A work/school account lives in an organization tenant and is managed by IT. A personal Microsoft account is owned by an individual for consumer services like Outlook.com or Xbox. They are separate identities.'
  },
  {
    id: 62,
    category: 'Microsoft 365 Basics',
    question: 'Why does the domain in a user\'s sign-in name matter?',
    answer:
      'The domain determines which tenant authenticates the user. The domain must be verified in Microsoft 365 and configured with the correct DNS records for mail flow, autodiscover, and federation if used.'
  },
  {
    id: 63,
    category: 'Microsoft 365 Basics',
    question: 'What does it mean when a user says they have no license?',
    answer:
      'Their account exists in Entra ID but has no Microsoft 365 services enabled. They may sign in but cannot use Outlook, Teams, OneDrive, or Office until a license is assigned.'
  },
  {
    id: 64,
    category: 'Microsoft 365 Basics',
    question: 'What is the Microsoft 365 service health dashboard?',
    answer:
      'A view in the admin center that shows current incidents and advisories affecting tenant services. Admins use it to confirm whether a problem is on Microsoft\'s side before deeper troubleshooting.'
  },
  {
    id: 65,
    category: 'Microsoft 365 Basics',
    question: 'What is a recommended first question when a user reports a Microsoft 365 issue?',
    answer:
      'Ask whether the same problem happens in a private/incognito browser at office.com. That isolates client, cache, and add-in problems from a real service or account issue very quickly.'
  },
  {
    id: 66,
    category: 'Microsoft 365 Intermediate',
    question: 'What is a dynamic group in Entra ID?',
    answer:
      'A group whose membership is calculated automatically from user or device attributes such as department, country, or job title. Membership updates as those attributes change.'
  },
  {
    id: 67,
    category: 'Microsoft 365 Intermediate',
    question: 'Does a shared mailbox require a license?',
    answer:
      'A shared mailbox under 50 GB without an archive or litigation hold does not need a license. Larger mailboxes, archive, or hold require an Exchange Online license assigned to the shared mailbox.'
  },
  {
    id: 68,
    category: 'Microsoft 365 Intermediate',
    question: 'What is the difference between a room mailbox and an equipment mailbox?',
    answer:
      'Both are resource mailboxes. Room mailboxes represent meeting rooms and have location attributes. Equipment mailboxes represent items like projectors or vehicles and are not tied to a location.'
  },
  {
    id: 69,
    category: 'Microsoft 365 Intermediate',
    question: 'What happens when a user is soft-deleted in Microsoft 365?',
    answer:
      'The account is moved to the deleted users area for 30 days. License is freed but the user, mailbox, and OneDrive can still be restored. After 30 days the account is hard-deleted and may be unrecoverable.'
  },
  {
    id: 70,
    category: 'Microsoft 365 Intermediate',
    question: 'What is the difference between email forwarding and an inbox rule that forwards?',
    answer:
      'Mailbox forwarding is a server-side setting on the mailbox itself. An inbox rule is a per-user client-style rule. External forwarding is often blocked by anti-spam policy regardless of which method is used.'
  },
  {
    id: 71,
    category: 'Microsoft 365 Intermediate',
    question: 'What is a sensitivity label?',
    answer:
      'A label users or admins apply to documents and emails to enforce protection like encryption, watermarks, access restrictions, and label-based DLP. Labels are configured in Microsoft Purview.'
  },
  {
    id: 72,
    category: 'Microsoft 365 Intermediate',
    question: 'What is the difference between SharePoint site permissions and library or item permissions?',
    answer:
      'Site permissions apply to everything on the site by default. Library or item permissions break inheritance and apply more granular access to specific content. Broken inheritance complicates audits.'
  },
  {
    id: 73,
    category: 'Microsoft 365 Intermediate',
    question: 'What is the OneDrive Recycle Bin lifecycle?',
    answer:
      'Deleted items go to the user Recycle Bin for up to 30 days, then to a second-stage Recycle Bin for the remainder of the 93-day total retention. Admins can restore from either stage before permanent deletion.'
  },
  {
    id: 74,
    category: 'Microsoft 365 Intermediate',
    question: 'What is Outlook Autodiscover and why does it matter?',
    answer:
      'Autodiscover automatically configures Outlook clients with the correct mail server, profile, and connection settings. If DNS or autodiscover is broken, Outlook cannot connect or repeatedly prompts for credentials.'
  },
  {
    id: 75,
    category: 'Microsoft 365 Intermediate',
    question: 'What is a litigation hold?',
    answer:
      'A setting on a mailbox that preserves all content, including deleted items, even if the user empties the mailbox. It is used for legal or compliance preservation requirements.'
  },
  {
    id: 76,
    category: 'Microsoft 365 Intermediate',
    question: 'What is the difference between a Teams private channel and a shared channel?',
    answer:
      'A private channel is restricted to a subset of the parent Team\'s members. A shared channel can include people from outside the Team, including external organizations, without adding them as Team members.'
  },
  {
    id: 77,
    category: 'Microsoft 365 Intermediate',
    question: 'What is the difference between deleting a user and blocking sign-in?',
    answer:
      'Blocking sign-in immediately prevents access while keeping the account, mailbox, and license intact. Deleting starts data retention timers and removes access to services. Block is preferred during offboarding for safety.'
  },
  {
    id: 78,
    category: 'Microsoft 365 Advanced',
    question: 'What is a service principal in Entra ID?',
    answer:
      'A service principal is the identity an application uses inside a tenant to authenticate and be granted permissions. It is the local representation of an app registration that exists either in this tenant or another.'
  },
  {
    id: 79,
    category: 'Microsoft 365 Advanced',
    question: 'What is the difference between an app registration and an enterprise app?',
    answer:
      'An app registration defines the application itself, often where it is developed. An enterprise application is the service principal in a consuming tenant where users sign in or admins grant permissions.'
  },
  {
    id: 80,
    category: 'Microsoft 365 Advanced',
    question: 'What is a managed identity in Azure?',
    answer:
      'A managed identity is an automatically managed Entra identity for an Azure resource so the resource can authenticate to other services without storing credentials in code or config.'
  },
  {
    id: 81,
    category: 'Microsoft 365 Advanced',
    question: 'What is Privileged Identity Management?',
    answer:
      'PIM provides time-bound, just-in-time activation of admin roles, with approval, MFA, justification, and audit. It reduces standing privilege and helps enforce least privilege for sensitive roles.'
  },
  {
    id: 82,
    category: 'Microsoft 365 Advanced',
    question: 'What is Microsoft Defender for Office 365?',
    answer:
      'It is the email and collaboration security layer in Microsoft 365, providing protections like Safe Links, Safe Attachments, anti-phishing, attack simulation, and threat investigation tools.'
  },
  {
    id: 83,
    category: 'Microsoft 365 Advanced',
    question: 'What do Safe Links and Safe Attachments do?',
    answer:
      'Safe Links rewrites URLs in mail and other apps so they are checked at click time. Safe Attachments detonates attachments in a sandbox before delivery to detect unknown malware.'
  },
  {
    id: 84,
    category: 'Microsoft 365 Advanced',
    question: 'What is Data Loss Prevention?',
    answer:
      'DLP detects sensitive content such as financial or personal data and applies actions like blocking, alerting, encrypting, or warning users. It runs across Exchange, SharePoint, OneDrive, Teams, and endpoints.'
  },
  {
    id: 85,
    category: 'Microsoft 365 Advanced',
    question: 'What is a break-glass account?',
    answer:
      'A highly protected emergency Global Admin account excluded from normal Conditional Access and MFA dependencies. It is used only when normal admin access is unavailable, with strict auditing and physical credential handling.'
  },
  {
    id: 86,
    category: 'Microsoft 365 Advanced',
    question: 'What is the difference between sign-in risk and user risk in Entra ID Protection?',
    answer:
      'Sign-in risk evaluates a single authentication attempt for signs of compromise. User risk evaluates the account over time. Policies can require MFA, password change, or block based on risk level.'
  },
  {
    id: 87,
    category: 'Microsoft 365 Advanced',
    question: 'What is a Conditional Access named location?',
    answer:
      'A defined IP range or country used as a signal in Conditional Access policies, for example to require MFA outside trusted networks or block sign-ins from specific countries.'
  },
  {
    id: 88,
    category: 'Microsoft 365 Advanced',
    question: 'What does revoking a user\'s sessions do?',
    answer:
      'It invalidates existing refresh tokens so the user must sign in again on every device. It is useful after suspected compromise, password reset, or before disabling an account during offboarding.'
  },
  {
    id: 89,
    category: 'Microsoft 365 Advanced',
    question: 'What is Microsoft Graph?',
    answer:
      'A unified REST API that exposes Microsoft 365 data and operations across Entra ID, Exchange, SharePoint, Teams, and more. Most modern admin scripts and integrations call Graph rather than legacy per-service APIs.'
  },
  {
    id: 90,
    category: 'Outlook',
    question: 'Outlook keeps prompting a user for credentials. What are common causes?',
    answer:
      'Cached credential corruption, expired token, MFA change, broken autodiscover, modern auth disabled, conditional access requiring re-auth, or a policy change. Try clearing cached credentials and signing in fresh.'
  },
  {
    id: 91,
    category: 'Outlook',
    question: 'What is the Outlook AutoComplete cache and how do you reset it?',
    answer:
      'It is the recently-used recipients list shown when typing names. In current Outlook you can clear individual entries with the X next to a suggestion or empty it from File > Options > Mail > Empty Auto-Complete List.'
  },
  {
    id: 92,
    category: 'Outlook',
    question: 'What is the difference between archiving a message and deleting it?',
    answer:
      'Archiving moves the message to an Archive folder while keeping it accessible. Deleting sends it to Deleted Items and eventually purges it. Online Archive is a separate large secondary mailbox enabled by license and policy.'
  },
  {
    id: 93,
    category: 'Outlook',
    question: 'What is Outlook Online Archive?',
    answer:
      'A secondary cloud mailbox that gives users additional storage and offloads older email. It is enabled per user with the right license and surfaced in Outlook as a separate mailbox node.'
  },
  {
    id: 94,
    category: 'Outlook',
    question: 'A user can send mail but receives nothing. Where do you start?',
    answer:
      'Compare Outlook with webmail, check focused inbox and junk, look for inbox rules or forwarding, verify mailbox is not full or on hold, check quarantine, and ask the sender for an NDR if available.'
  },
  {
    id: 95,
    category: 'Outlook',
    question: 'What is a Non-Delivery Report?',
    answer:
      'An NDR is an automated message from the mail system explaining why a message could not be delivered, including a status code and reason such as recipient not found, mailbox full, or blocked by policy.'
  },
  {
    id: 96,
    category: 'Outlook',
    question: 'How does Outlook flag external email?',
    answer:
      'Many tenants enable an External tag or banner on messages from outside the organization. It helps users recognize potential phishing and is configured in Exchange Online and Outlook clients.'
  },
  {
    id: 97,
    category: 'Outlook',
    question: 'A user complains a coworker can no longer see their calendar. What do you check?',
    answer:
      'Verify calendar sharing permissions on the user\'s calendar, the level granted (availability, limited, full details), whether the coworker accepted the share, and whether any policy or recent migration reset permissions.'
  },
  {
    id: 98,
    category: 'Outlook',
    question: 'What does Outlook Work Offline mode do?',
    answer:
      'It disconnects Outlook from the server while keeping access to local cached items. It is useful intentionally but is sometimes left on accidentally and looks like Outlook is broken. Toggle it from the Send/Receive tab.'
  },
  {
    id: 99,
    category: 'Outlook',
    question: 'What is the difference between Focused Inbox and Other?',
    answer:
      'Focused Inbox uses Microsoft\'s sorting to show important mail in Focused and the rest in Other. It is per-user and can be turned off. Mail is not lost; it is just sorted into the Other tab.'
  },
  {
    id: 100,
    category: 'Outlook',
    question: 'Outlook is stuck on Connecting or Disconnected. What do you check?',
    answer:
      'Network connectivity, VPN status, proxy, system date and time, modern auth, autodiscover, credential prompts, recent Windows or Outlook updates, and try Outlook Safe Mode and a new profile to isolate.'
  },
  {
    id: 101,
    category: 'Outlook',
    question: 'A user wants their out-of-office to also reply to external senders. Where is that set?',
    answer:
      'In Outlook automatic replies, enable a separate message for senders outside the organization and choose whether it applies to all external senders or only contacts. Tenant settings can also restrict external auto-replies.'
  },
  {
    id: 102,
    category: 'Teams',
    question: 'A user\'s camera does not work in Teams. What do you check?',
    answer:
      'Camera privacy settings, Windows app permissions, the correct device selected in Teams, conflict with another app using the camera, drivers, and whether the camera works in another app or on the web client.'
  },
  {
    id: 103,
    category: 'Teams',
    question: 'What is the difference between a Teams chat message and a channel post?',
    answer:
      'Chats are private conversations between specific people stored per user in OneDrive-backed storage. Channel posts are visible to channel members, threaded, and stored in the Team\'s SharePoint site.'
  },
  {
    id: 104,
    category: 'Teams',
    question: 'What is a Teams meeting policy?',
    answer:
      'A set of admin-controlled rules that govern meeting features such as recording, transcription, lobby behavior, screen sharing, and external participants. Policies are assigned per user or globally.'
  },
  {
    id: 105,
    category: 'Teams',
    question: 'How do you give a new person access to a Teams private channel?',
    answer:
      'They must first be a member of the parent Team. Then a private channel owner adds them as a member of the private channel. Admins cannot bypass this for privacy reasons except through PowerShell or Graph.'
  },
  {
    id: 106,
    category: 'Teams',
    question: 'What is the difference between Teams external access and guest access?',
    answer:
      'External access lets users in different organizations chat, call, and meet without joining a Team. Guest access invites a specific external user as a member of a Team with full collaboration rights.'
  },
  {
    id: 107,
    category: 'Teams',
    question: 'A user\'s Teams is sluggish or showing stale data. What is the first step?',
    answer:
      'Sign out, fully quit Teams, and clear the Teams cache folder. On the new Teams client, this is automated through Settings, but the legacy client requires deleting cache files manually.'
  },
  {
    id: 108,
    category: 'Teams',
    question: 'A user cannot share their screen in Teams. Why might that happen?',
    answer:
      'Screen sharing may be disabled by meeting policy, the user may be a presenter without permission, the OS may need screen recording permission, the browser may not support sharing, or the network may be blocking media.'
  },
  {
    id: 109,
    category: 'Teams',
    question: 'What is the difference between Teams presence Available, Busy, and Do Not Disturb?',
    answer:
      'Available means accepting messages and calls normally. Busy still shows notifications. Do Not Disturb suppresses notifications except from priority contacts. Presence can also be set automatically by calendar status.'
  },
  {
    id: 110,
    category: 'Teams',
    question: 'A user is not receiving any Teams notifications. Where do you check?',
    answer:
      'Teams notification settings, do-not-disturb status, focus assist or quiet hours in the OS, system notification permissions for Teams, missed activity email settings, and whether the user is signed into the right tenant.'
  },
  {
    id: 111,
    category: 'Teams',
    question: 'What is the difference between scheduling a Teams meeting and using Meet now?',
    answer:
      'Meet now starts an instant meeting and creates a thread or chat for it. A scheduled meeting is added to calendars in advance, supports invites, lobby, channel context, and recurrence options.'
  },
  {
    id: 112,
    category: 'Teams',
    question: 'A Teams call drops or has poor audio. What network factors matter?',
    answer:
      'Bandwidth, jitter, and packet loss. Wi-Fi quality, VPN routing of media traffic, and competing traffic on the link are common causes. Ideally Teams media should bypass VPN and reach Microsoft directly.'
  },
  {
    id: 113,
    category: 'Teams',
    question: 'Why might guests not appear in a tenant directory search?',
    answer:
      'Guest visibility is controlled by external collaboration settings, address book policies, and whether the guest has been added to relevant Teams or groups. Some tenants restrict guest enumeration intentionally.'
  },
  {
    id: 114,
    category: 'Windows',
    question: 'What is the difference between a local user account and a domain or Entra-joined account?',
    answer:
      'A local account is stored only on the device. A domain account authenticates against on-prem Active Directory. An Entra-joined account authenticates against Microsoft Entra ID and is managed centrally with cloud policy.'
  },
  {
    id: 115,
    category: 'Windows',
    question: 'How do you check pending Windows updates from a command line?',
    answer:
      'In PowerShell you can use Get-WindowsUpdate from the PSWindowsUpdate module, or check the Windows Update service via the COM interface. The Settings UI and Microsoft Intune also show update status.'
  },
  {
    id: 116,
    category: 'Windows',
    question: 'What does sfc /scannow do?',
    answer:
      'System File Checker scans protected Windows system files and replaces corrupt or modified files from a cached copy. It is a common first step when Windows behaves erratically after an update or crash.'
  },
  {
    id: 117,
    category: 'Windows',
    question: 'What is DISM and when do you use it?',
    answer:
      'Deployment Image Servicing and Management is used to repair the underlying Windows image. DISM /Online /Cleanup-Image /RestoreHealth is often run before sfc /scannow when system files cannot be repaired.'
  },
  {
    id: 118,
    category: 'Windows',
    question: 'A user reports a Windows blue screen. What information do you collect?',
    answer:
      'The stop code, what the user was doing, recent driver or update changes, frequency, and whether a memory dump was captured. Reliability Monitor and the System event log help correlate the crash.'
  },
  {
    id: 119,
    category: 'Windows',
    question: 'What is Windows Reliability Monitor useful for?',
    answer:
      'It shows a timeline of system stability events, application failures, hardware errors, and updates. It is faster than Event Viewer for spotting when problems started after a specific change.'
  },
  {
    id: 120,
    category: 'Windows',
    question: 'What does gpupdate /force do?',
    answer:
      'It forces the device to reapply all Group Policy settings rather than only those that have changed. It is used to verify policy is applied or to push a recent change without waiting for the normal refresh interval.'
  },
  {
    id: 121,
    category: 'Windows',
    question: 'How do you check the exact Windows version and build?',
    answer:
      'Run winver, or check Settings > System > About, or run systeminfo or Get-ComputerInfo in PowerShell. Build numbers help identify whether a known issue or fix applies.'
  },
  {
    id: 122,
    category: 'Windows',
    question: 'A printer keeps disappearing from a user\'s PC. What might cause that?',
    answer:
      'Print spooler issues, driver corruption, group policy print preference changes, recent Windows print security updates, or a network printer name or IP change. Removing and re-adding the printer often resolves it.'
  },
  {
    id: 123,
    category: 'Windows',
    question: 'What is Windows Hello?',
    answer:
      'A passwordless sign-in feature that uses PIN, fingerprint, or facial recognition tied to the device. The credential is bound to the device hardware and is considered phishing-resistant when configured correctly.'
  },
  {
    id: 124,
    category: 'Windows',
    question: 'How can you run a single program as administrator without giving the user admin rights?',
    answer:
      'Use runas with admin credentials, an Intune or LAPS-managed local admin password, an elevated shortcut with stored credentials in a privileged tool, or a privilege management product. Avoid permanent admin rights.'
  },
  {
    id: 125,
    category: 'Windows',
    question: 'A user\'s OneDrive icon shows a red X. What does that mean and what do you do?',
    answer:
      'It usually means sync is blocked, often by sign-in or credential issues, file path length, locked files, storage limits, or network restrictions. Restart OneDrive, sign in again, and review the activity center for specifics.'
  },
  {
    id: 126,
    category: 'Security',
    question: 'What is the difference between phishing, spear phishing, and whaling?',
    answer:
      'Phishing is mass deceptive email or messaging. Spear phishing targets a specific individual with personalized content. Whaling specifically targets high-profile people such as executives or finance staff.'
  },
  {
    id: 127,
    category: 'Security',
    question: 'What is a passkey?',
    answer:
      'A passkey is a phishing-resistant credential based on public-key cryptography. The private key stays on the device or hardware key, while the service holds only the public key. Users authenticate with biometric or PIN unlock.'
  },
  {
    id: 128,
    category: 'Security',
    question: 'What does FIDO2 mean?',
    answer:
      'FIDO2 is an open authentication standard that enables passwordless sign-in using public-key cryptography on hardware security keys, platform authenticators, or passkeys. It is resistant to phishing and replay.'
  },
  {
    id: 129,
    category: 'Security',
    question: 'Why is SMS-based MFA considered weaker than app or hardware-based MFA?',
    answer:
      'SMS can be intercepted via SIM swap, SS7 attacks, or phishing of one-time codes. App-based push and especially FIDO2 keys are not vulnerable to those attacks and are recommended where supported.'
  },
  {
    id: 130,
    category: 'Security',
    question: 'A user clicked a phishing link and entered credentials. What is the immediate response?',
    answer:
      'Reset the password, revoke active sessions, review sign-in logs and mailbox rules, check for new MFA registrations, search for forwarded mail or external sharing, and notify the security team or follow incident process.'
  },
  {
    id: 131,
    category: 'Security',
    question: 'What is a consent grant attack?',
    answer:
      'An attacker tricks a user into granting permissions to a malicious OAuth application. The app then accesses email or files using delegated tokens without needing the password. Tenants should restrict user consent and monitor app permissions.'
  },
  {
    id: 132,
    category: 'Security',
    question: 'What is Business Email Compromise?',
    answer:
      'BEC is fraud where attackers impersonate executives, vendors, or staff to redirect payments or extract sensitive data, often using lookalike domains, hijacked accounts, or social engineering instead of malware.'
  },
  {
    id: 133,
    category: 'Security',
    question: 'What is MFA fatigue or push bombing?',
    answer:
      'An attacker who already has a valid password sends repeated MFA push prompts hoping the user approves out of confusion. Mitigations include number matching, additional context in prompts, and FIDO2 keys.'
  },
  {
    id: 134,
    category: 'Security',
    question: 'Why should service accounts have unique strong credentials and rotation?',
    answer:
      'Shared or static service account credentials are common attack targets. Unique strong secrets, vaulted storage, rotation, and monitored sign-ins reduce the blast radius if any single secret is exposed.'
  },
  {
    id: 135,
    category: 'Security',
    question: 'What is a token theft attack?',
    answer:
      'An attacker steals a valid session or refresh token from a user\'s device or browser and reuses it to bypass MFA. Defenses include token binding, short session lifetimes, sign-in risk policies, and revoking sessions on suspicion.'
  },
  {
    id: 136,
    category: 'Security',
    question: 'What is the principle of "verify, then trust" or zero trust?',
    answer:
      'Every access request is authenticated, authorized, and inspected based on identity, device, location, and risk, rather than trusted by network position. Microsoft\'s implementation centers on Conditional Access and device compliance.'
  },
  {
    id: 137,
    category: 'Security',
    question: 'Why must help desk avoid resetting MFA without strong identity verification?',
    answer:
      'MFA reset is a top vector for account takeover via social engineering. Without strong, ideally out-of-band identity verification, the help desk can hand control of an account to an attacker pretending to be the user.'
  },
  {
    id: 138,
    category: 'Customer Service',
    question: 'A user is frustrated because they have been bounced between teams. How do you respond?',
    answer:
      'Acknowledge the frustration, take ownership of the conversation, summarize what you understand so far, avoid blaming other groups, and either resolve it or perform a warm handoff with the user on the line.'
  },
  {
    id: 139,
    category: 'Customer Service',
    question: 'What does managing expectations mean in a help desk context?',
    answer:
      'Telling the user what will happen, how long it will likely take, and what they should do in the meantime. Clear, honest expectations reduce repeat calls and frustration even when the issue cannot be solved immediately.'
  },
  {
    id: 140,
    category: 'Customer Service',
    question: 'How do you politely close a ticket when the user has stopped responding?',
    answer:
      'Send one or two reminder messages spaced out, summarize what you tried, state when the ticket will close, and confirm how to reopen or follow up. Document the lack of response in the ticket history.'
  },
  {
    id: 141,
    category: 'Customer Service',
    question: 'How do you say no to a user request that is out of policy?',
    answer:
      'Be respectful and direct, explain the policy briefly without blaming the user, offer the closest acceptable alternative, and document the request. Escalate if the user has a legitimate business need that policy does not cover.'
  },
  {
    id: 142,
    category: 'Customer Service',
    question: 'How do you handle a question you do not know the answer to live?',
    answer:
      'Be honest, say you want to verify before giving wrong information, set a callback or update timeframe, document what was asked, research, and follow up reliably. Trust comes from honest, accurate answers, not fast guesses.'
  },
  {
    id: 143,
    category: 'Customer Service',
    question: 'Why is using the user\'s name during a call valuable?',
    answer:
      'It personalizes the interaction, conveys respect, and helps de-escalate. Use it naturally and not excessively. Always confirm pronunciation and preferred name when not obvious.'
  },
  {
    id: 144,
    category: 'Customer Service',
    question: 'How do you maintain professionalism with a hostile or rude user?',
    answer:
      'Stay calm, do not match their tone, focus on the problem rather than the behavior, set clear boundaries if needed, document the interaction, and escalate to a manager if it crosses into abuse.'
  },
  {
    id: 145,
    category: 'Customer Service',
    question: 'Why is documenting steps in the ticket as you work valuable?',
    answer:
      'It captures accurate timing, allows handoff, supports later auditing, helps spot patterns across tickets, and protects you and the user if the issue is reopened or escalated. Notes written after the fact tend to lose detail.'
  },
  {
    id: 146,
    category: 'Scenarios',
    question: 'The CEO cannot access email on her phone, but webmail works. What do you check?',
    answer:
      'Account profile on the device, mobile app version, sign-in and MFA prompts, Conditional Access policy targeting mobile, app protection policy, OS update status, and whether removing and re-adding the account fixes it.'
  },
  {
    id: 147,
    category: 'Scenarios',
    question: 'After a Windows feature update, several users report apps closing on launch. What is your approach?',
    answer:
      'Confirm the common build, check known issues for that update, review event logs and Reliability Monitor, test in a clean profile, and consider rollback or pausing further deployment while engineering investigates.'
  },
  {
    id: 148,
    category: 'Scenarios',
    question: 'Multiple users in one office report slow Microsoft 365 performance. What do you investigate?',
    answer:
      'Local network, ISP, DNS resolution, firewall or proxy inspecting Microsoft 365 traffic, and whether VPN is forcing media or Microsoft 365 traffic through a chokepoint. Compare with users at home or on cellular as a control.'
  },
  {
    id: 149,
    category: 'Scenarios',
    question: 'A user opens a OneDrive file and sees someone else\'s name as the owner. What might be happening?',
    answer:
      'It is probably a file shared from another user\'s OneDrive that appears under Shared with me, or a SharePoint document opened from a Teams channel. Confirm the actual location rather than assuming the file moved.'
  },
  {
    id: 150,
    category: 'Scenarios',
    question: 'A contractor\'s account works in the morning but fails after 10am every day. What might cause that?',
    answer:
      'A Conditional Access sign-in frequency policy, a temporary access pass expiration, a license assignment removed by automation, a working-hours access policy, or a usage location tied to a daily change. Check sign-in logs.'
  },
  {
    id: 151,
    category: 'Scenarios',
    question: 'A user accidentally shared a sensitive file externally. What do you do?',
    answer:
      'Help them remove the share immediately, identify who accessed it, check audit logs, apply or update sensitivity labels, notify the security or compliance team, and review whether DLP policy needs adjustment.'
  },
  {
    id: 152,
    category: 'Scenarios',
    question: 'After a phishing report, you confirm one user entered credentials. What is the response?',
    answer:
      'Reset the password, revoke sessions, check for new MFA methods, mailbox forwarding rules, suspicious sign-ins, OAuth grants, and shared file activity. Then notify security and document scope and actions.'
  },
  {
    id: 153,
    category: 'Scenarios',
    question: 'A user gets "your account is locked" but says they did not fail any sign-ins. What could cause this?',
    answer:
      'Smart lockout from another client retrying old credentials, a saved password on a phone, a service or printer using cached credentials, brute-force attempts from the internet, or a password reset that did not propagate.'
  },
  {
    id: 154,
    category: 'Scenarios',
    question: 'An entire team cannot access a SharePoint site this morning. What is your triage?',
    answer:
      'Confirm scope and shared characteristics, check service health, review recent permission, sharing, or sensitivity label changes, look at audit logs for site changes, and verify whether the site was renamed, moved, or archived.'
  },
  {
    id: 155,
    category: 'Scenarios',
    question: 'A user travels internationally and Microsoft 365 access is now blocked. What is the likely cause?',
    answer:
      'A Conditional Access policy that blocks unfamiliar countries, a risky sign-in detection, or a corporate travel exception that was not requested in advance. Verify with sign-in logs and follow the documented travel access process.'
  }
];
