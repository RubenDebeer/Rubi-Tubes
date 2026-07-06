export const opinions = [
  {
    type: 'opinion',
    slug: 'the-inferiority-complex-as-a-developer',
    title: 'The inferiority complex as a developer',
    tags: ['career'],
    date: 'Apr 2026',
    readTime: '7 min read',
    excerpt: 'Everyone around me seemed to just <em>know</em> things. Here\'s what I got wrong about that feeling — and what finally helped me put it down.',
    tagColor: 'purple',
    body: `
      <p>This is a placeholder draft — swap in your real words. It's set up in the reading style so you can see exactly how a full post looks: comfortable line length, big readable type, and room to breathe between paragraphs.</p>
      <p>For a while I was convinced everyone else had read the manual I'd somehow skipped. They dropped acronyms in standups like they were weather. I nodded, wrote them down, and quietly googled everything afterwards.</p>
      <h2>The thing nobody tells you</h2>
      <p>The gap I felt wasn't knowledge. It was <strong>exposure</strong>. The people who looked effortless had just seen more broken things than I had — and every broken thing is a lesson you don't forget.</p>
      <p>So I started keeping notes. Not to look smart, but so future-me wouldn't have to relearn the same thing at 2am during an incident. That habit is half of why this site exists.</p>
      <blockquote style="margin:32px 0;padding:24px 28px;background:var(--surface);border-radius:20px;border:1px solid var(--hair);box-shadow:0 10px 30px rgba(19,15,13,.06)">
        <div style="font-family:var(--font-display);font-weight:600;font-size:24px;line-height:1.3;font-style:italic;color:var(--ink)">You're not behind. You've just seen fewer fires — and every fire teaches you something.</div>
      </blockquote>
      <h2>What actually helped</h2>
      <p>Asking the "dumb" question out loud, once, saved me hours of quiet flailing more times than I can count. Nobody remembers the question. Everybody remembers the person who shipped.</p>
      <p>Replace this with your story. The layout, the pull quote, the spacing — it's all ready for your voice.</p>
    `,
  },
  {
    type: 'opinion',
    slug: 'advice-for-grad-ruben',
    title: 'Advice for Grad Ruben',
    tags: ['career'],
    date: 'Mar 2026',
    readTime: '5 min read',
    excerpt: 'A letter to myself on day one. What I\'d tell the version of me who thought seniority was about knowing every answer.',
    tagColor: 'pink',
    body: `
      <p>A placeholder post — replace with your own words.</p>
      <h2>Dear Grad Ruben</h2>
      <p>You don't have to have all the answers on day one. Nobody does. Seniority isn't about knowing everything — it's about knowing how to find out, and being comfortable with uncertainty along the way.</p>
      <p>The engineers who intimidate you? They've just been wrong more times than you have. That's it. That's the whole secret.</p>
      <h2>What I'd change</h2>
      <p>I'd ask more questions earlier. I'd be less afraid of looking stupid in front of colleagues who forgot what it felt like not to know things.</p>
    `,
  },
  {
    type: 'opinion',
    slug: 'ai-supports-it-does-not-decide',
    title: 'AI supports. It does not decide.',
    tags: ['ways-of-working'],
    date: 'Feb 2026',
    readTime: '6 min read',
    excerpt: 'Where I\'ve let AI into my workflow, where I keep it out, and why the interesting decisions are still mine to make.',
    tagColor: 'sky',
    body: `
      <p>A placeholder post — replace with your own words.</p>
      <h2>Where AI earns its place</h2>
      <p>Boilerplate. Repetitive transformations. First drafts that need heavy editing. These are the places AI saves real time without stealing credit.</p>
      <h2>Where I keep it out</h2>
      <p>Architecture decisions. Code review for subtle bugs. Any place where "looks right" and "is right" diverge. Those still need a human who understands the system, the constraints, and the consequences.</p>
      <p>The interesting decisions are still mine. That's not a complaint — it's the job.</p>
    `,
  },
]

export const notes = [
  {
    type: 'note',
    slug: 'how-dns-resolution-works',
    title: 'How DNS resolution works',
    kind: 'Cheat sheet',
    tags: ['networking', 'dns', 'resolver'],
    date: 'Jun 2026',
    excerpt: 'Recursive vs iterative, the resolver chain, and why your change hasn\'t propagated yet.',
    accentColor: 'sky',
    body: `
      <p>Placeholder note — replace with your own. This one shows how a technical note reads: prose, a couple of steps, and a code block that flips to the dark brand palette for contrast.</p>
      <h2>The chain, in order</h2>
      <p>When you type a hostname, the resolver walks a chain until something answers authoritatively:</p>
      <ol style="font-size:19px;line-height:1.7;color:var(--ink);margin:0 0 22px;padding-left:24px">
        <li style="margin-bottom:10px"><strong>Stub resolver</strong> — your machine asks its configured resolver (often the router or an <code>8.8.8.8</code>-style service).</li>
        <li style="margin-bottom:10px"><strong>Recursive resolver</strong> — does the legwork, caching answers along the way.</li>
        <li style="margin-bottom:10px"><strong>Root → TLD → authoritative</strong> — each points one step closer until the authoritative server returns the record.</li>
      </ol>
      <div style="background:#130F0D;border-radius:16px;overflow:hidden;border:1px solid rgba(90,198,255,.25);box-shadow:0 0 30px rgba(90,198,255,.12);margin:28px 0">
        <div style="display:flex;align-items:center;gap:7px;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08)">
          <span style="width:11px;height:11px;border-radius:50%;background:#F966B4;display:inline-block"></span>
          <span style="width:11px;height:11px;border-radius:50%;background:#5AC6FF;display:inline-block"></span>
          <span style="width:11px;height:11px;border-radius:50%;background:#59FFF5;display:inline-block"></span>
          <span style="margin-left:8px;font-family:var(--font-mono);font-size:12px;color:#8C8985">terminal</span>
        </div>
        <pre style="margin:0;padding:20px 22px;font-family:var(--font-mono);font-size:14.5px;line-height:1.7;color:#F3F3F0;overflow-x:auto"><span style="color:#59FFF5">$</span> dig +trace ruben.dev

<span style="color:#8C8985">;; global options: +cmd</span>
ruben.dev.  <span style="color:#7D93FC">86400</span>  IN  NS  <span style="color:#F966B4">ns1.example.net.</span>
ruben.dev.  <span style="color:#7D93FC">300</span>    IN  A   <span style="color:#59FFF5">203.0.113.42</span>
<span style="color:#8C8985">;; Query time: 24 msec</span></pre>
      </div>
      <h2>Why your change hasn't propagated</h2>
      <p>It's almost always the <code>TTL</code>. Resolvers are allowed to cache the old answer until it expires — so a 24-hour TTL means up to 24 hours of stale replies, no matter how fast you edited the record.</p>
    `,
  },
  {
    type: 'note',
    slug: 'kubernetes-architecture-from-scratch',
    title: 'Kubernetes architecture, from scratch',
    kind: 'Long read',
    tags: ['kubernetes', 'microservices', 'architecture', 'scaling'],
    date: 'May 2026',
    excerpt: 'Control plane, kubelet, scheduler, etcd — how the pieces actually talk to each other.',
    accentColor: 'sky',
    body: `
      <p>A placeholder note — replace with your own content.</p>
      <h2>The control plane</h2>
      <p>The control plane is the brain of the cluster. It manages the desired state, schedules workloads, and exposes the API. The key components are the API server, etcd, the scheduler, and the controller manager.</p>
      <h2>The worker nodes</h2>
      <p>Worker nodes run the actual workloads. Each node runs a kubelet (the node agent), kube-proxy (network rules), and a container runtime like containerd.</p>
    `,
  },
  {
    type: 'note',
    slug: 'notes-on-dlt',
    title: 'Notes on DLT',
    kind: 'Long read',
    tags: ['dlt', 'data', 'scaling', 'distributed-systems'],
    date: 'May 2026',
    excerpt: 'Distributed ledgers demystified — consensus, finality, and where they actually earn their keep.',
    accentColor: 'purple',
    body: `
      <p>A placeholder note on distributed ledger technology — replace with your own content.</p>
      <h2>Consensus mechanisms</h2>
      <p>The fundamental challenge in a distributed ledger is agreeing on the current state without a central authority. Proof of Work, Proof of Stake, and BFT variants all solve this differently.</p>
      <h2>Where DLT actually helps</h2>
      <p>Not everywhere. The honest answer is that most use cases don't need a blockchain. But for multi-party systems where no single party should be trusted with the ledger, it earns its complexity cost.</p>
    `,
  },
  {
    type: 'note',
    slug: 'cicd-pipelines-notes',
    title: 'CI/CD pipelines — notes',
    kind: 'Long read',
    tags: ['ci-cd', 'pipelines', 'automation'],
    date: 'Apr 2026',
    excerpt: 'Stages, gates, artefacts and rollbacks. The mental model I use before touching any YAML.',
    accentColor: 'pink',
    body: `
      <p>A placeholder note — replace with your own content.</p>
      <h2>The mental model</h2>
      <p>A CI/CD pipeline is just a series of assertions about your software. Each stage says "I claim this is true" — and gates let you stop the train when a claim fails.</p>
      <h2>Rollbacks</h2>
      <p>The ability to roll back quickly is more valuable than the ability to deploy quickly. Invest in rollback before you invest in deployment speed.</p>
    `,
  },
  {
    type: 'note',
    slug: 'authenticate-github-actions-with-oidc',
    title: 'Authenticate GitHub Actions with OIDC',
    kind: 'Cheat sheet',
    tags: ['ci-cd', 'github-actions', 'security'],
    date: 'Mar 2026',
    excerpt: 'Drop the long-lived cloud keys. Trust a token instead — here\'s the minimal setup.',
    accentColor: 'sky',
    body: `
      <p>A placeholder note — replace with your own content.</p>
      <h2>Why OIDC</h2>
      <p>Long-lived cloud credentials in GitHub secrets are a liability. If they leak, they stay valid until rotated. OIDC tokens are short-lived by design — they expire after the job ends.</p>
      <h2>The minimal setup</h2>
      <p>Configure your cloud provider to trust GitHub's OIDC issuer, then use the official action to exchange a workflow token for a short-lived cloud credential. No secrets to manage.</p>
    `,
  },
  {
    type: 'note',
    slug: 'custom-workflow-triggers',
    title: 'Custom workflow triggers',
    kind: 'Cheat sheet',
    tags: ['ci-cd', 'github-actions', 'automation'],
    date: 'Mar 2026',
    excerpt: 'repository_dispatch and workflow_dispatch — firing pipelines from outside the repo.',
    accentColor: 'sky',
    body: `
      <p>A placeholder note — replace with your own content.</p>
      <h2>workflow_dispatch</h2>
      <p>Lets you trigger a workflow manually from the GitHub UI or via the API. Add inputs to make it configurable.</p>
      <h2>repository_dispatch</h2>
      <p>An external system sends a webhook to GitHub, which triggers the workflow. Useful for cross-repo orchestration.</p>
    `,
  },
]

export const allContent = [...opinions, ...notes]

export function getOpinion(slug) {
  return opinions.find(o => o.slug === slug)
}

export function getNote(slug) {
  return notes.find(n => n.slug === slug)
}

export function getOpinionIndex(slug) {
  return opinions.findIndex(o => o.slug === slug)
}

export function getNoteIndex(slug) {
  return notes.findIndex(n => n.slug === slug)
}
