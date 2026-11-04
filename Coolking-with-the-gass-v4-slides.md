---
title: "It's Not About What You Know, But Who You Know"
subtitle: "Scaling Credeq's engineering with agents — distribute the knowledge, centralize only the routing"
author: Ruben de Beer
---

# It's not about what you know
# but *who* you know

Scaling Credeq's engineering with agents.

**Distribute the knowledge. Centralize only the routing.**

---

## The Trade

Good engineers build tools.

Great ones build tools that build **leverage** —
one person's judgment doing the work of ten.

Documentation. Linters. CI. Agents.
> Same instinct. New outfit.

---

## Agents Show Up Smart

What they don't show up with:

- The local knowledge
- The scar tissue of *this* repo
- The one config nobody ever wrote down

...because everyone just *knew*.

---

## But That's Not the Interesting Part

Knowing *which tool to use* was always the engineer's job.

**Not the tool's.**

The judgment doesn't leave when the agent arrives.

> The real question: where should the context live —
> and who's still on the hook for saying *no*?

---

## The Second Constraint

An old law of engineering:

# Speed. Quality. Cost.
### Only two are ever yours at once.

Scale doesn't repeal it. It just closes the loopholes.

---

## The Actual Challenge

> Not *"add more agents."*

**How do you get faster —**
without quietly paying for it in quality, or in cash, later?

---

## The Shape of the Fix

❌ One agent for many repos, carrying every rule Credeq ever wrote.

✅ Agents built for the repo they live in —
carrying only what that repo needs. Nothing else.

*What's still missing: deciding which workflows even deserve one.*

---

## What Does an Engineer *Actually* Do?

Strip away the titles, the standups, the tickets:

### 1. Write the code.
### 2. Push the code.

Everything else is decoration.

---

## But the Decoration Is the Job

Plan → Write → Test → Review → Merge → Ship → Watch.

Then start over the moment something breaks.

> That longer loop has a name:
> **the Software Development Lifecycle.**

---

## Seven Boxes Is a Map, Not the Terrain

Each box is a *dozen* smaller workflows wearing one label.

- Writing tests vs. running them
- Documentation vs. code
- A hotfix vs. a rewrite

Engineers fill the gaps with judgment. **Agents can't.**

---

## One Platform, Many Kingdoms

Credeq's data platform = multiple repos, each with its own lifecycle:

- **dbt Region** — regional transformation logic
- **Data Platform Foundations** — the infra underneath
- **Data Platform** — the warehouse modules
- **Data Orchestration** — the Airflow DAGs
- **Data Contracts** — what's allowed in

*A slow step in one is not the slow step in another.*

---

## Two Kinds of Workflow

**🟢 Local** — planned, written, tested, shipped inside one repo.
> Local bottleneck. Local fix.

**🔵 Cross-repo** — a new field crossing four repos, four owners,
nobody seeing the whole thing.
> Fails in the *handoffs.*

Hold onto this distinction. It comes back.

---

## The Problem, in One Sentence

# Scale Credeq's developer operations with AI agents —
# without compromising quality,
# while increasing velocity.

Three things. Each can quietly kill the other two.

---

## Gates vs. Scoreboard

**Quality & Cost** are **gates** — checked *going in.*
A violation vetoes the agent.

**Speed** is a **scoreboard** — checked *coming out.*
Did it pay off?

> Mix them up and you get agents that are
> very fast at making things worse.

---

## An Agent Is Just an Application

Google's definition — read it twice.

The word doing the work is *application.*

> Not a colleague. Not a strategy.
> An application with a model where the business logic used to sit.

Inputs it accepts. Tools it can touch. A goal someone defined.

---

## The Failure Mode: Tool Bloat

Pile tool definitions into one prompt →
the model gets **less accurate** *and* **more expensive.**

In a shared agent, every rule added for one repo
is noise every other workflow pays for.

> Decomposing isn't a style choice.
> It's how the quality gate stays closed.

---

## Framework ≠ Architecture

**Framework** = the *decision.* Does an agent belong? *(It can answer no.)*

**Architecture** = the *build.* Only for what the framework didn't reject.

> Framework first — no point designing a system
> for an agent that shouldn't exist.

---

## The Framework — 3 Steps

### 1. Identify the SDL
Which lifecycle? Local or cross-repo?

### 2. Identify the workflow
Not the box — the actual workflow inside it.

### 3. Check the gates
Cost? Quality? If either fails — **stop.**

> **No is a fine answer.**

---

## The Proposed Architecture

# Distribute the knowledge.
# Centralize only the routing.

Specialists = **skill files colocated in their repos.**
Execution = a **coordinator** that does one thing: *routes.*

---

## The Coordinator Knows Nothing

Locally: a repo coordinator routes among its own skills.
Across repos: a central coordinator invokes skills in handoff order.

Either way — it knows nothing about the domain.

> **It succeeds not by knowing things,**
> **but by knowing who does.**

---

## The Registry Fills Itself

On merge, CI publishes **only the skill's description** — never its body.

- The registry is current the instant a PR lands.
- Governance is free — it rides existing CODEOWNERS review.

> The knowledge stays home. Only the *pointer* travels.

---

## Skills, Not Agents (by Default)

A skill is **passive knowledge** — a file loaded into a running agent.

What gets *stronger* as skills:
- Ownership & colocation — just a file in the repo
- The registry — free
- The cost gate — progressive disclosure

*Win holds only if skills are invoked, not preloaded.*

---

## Name the Trade-offs Honestly

Two guarantees get *weaker*:

- **Isolation** — skills share the host's tools;
  needs harness-enforced allowlists, not a prompt asking nicely.
- **Independent execution** — one host swaps files in sequence;
  no parallelism, no independent failure.

---

## The Rule

# Default to skills.
# Promote to a full sub-agent
# only where a gate demands it.

Its own tools. Real parallelism. Independent failure isolation.

> Same "no is a fine answer" discipline — pointed at the runtime.

---

## The Registry Becomes a Menu

Defining a new agent stops meaning *authoring knowledge.*

It means three cheap things:
1. Pick skills from the registry
2. Write a prompt stating the goal
3. Declare a tool allowlist

> A new agent is a *selection over the registry* — not new rules.

---

## Composition Doesn't Skip the Gates

**The registry is the allowlist** — no back door around governance.

Being *able* to snap five skills together
doesn't mean an agent *belongs* there.

> The easier it gets to assemble one,
> the more the discipline lives in deciding *whether to.*

---

## It Maps Cleanly onto GCP

| Concept | GCP Service |
|---|---|
| Skill, colocated | GitHub repo |
| Publish on merge | GitHub Actions |
| Registry | Firestore |
| Host + coordinator | Cloud Run |
| Reasoning | Vertex AI |
| Per-skill tool scoping | IAM |
| Scoreboard | Cloud Logging / Monitoring |

*Everything the agent touches — already a service Credeq runs.*

---

## Two GCP Details Do Real Work

**IAM per service account** turns
*"a specialist can't wander into another repo"*
from a hope into an **enforced boundary.**

**Cloud Logging** turns the speed claim
into an **actual dashboard.**

---

## How It Addresses Speed

- Aimed at the *real* bottleneck — the scaffolding rebuilt every model
- Common case has **no central hop**
- Work that used to serialize now runs in **parallel**
- Knowledge is in context the moment the agent starts

> Proof isn't faith — it's the cycle-time delta on the dashboard.

---

## How It Holds Quality & Cuts Cost

**Quality** — narrow scope + a critic that approves, rejects, or sends back.
> The agent produces. It never marks its own homework.

**Cost** — a lean prompt, no tool-bloat tax, no reasoning through five repos.
> The saving lands on *every* invocation. It compounds.

---

## The Escalation Rule

```
New workflow
   ├─ Local?      → capture as a skill
   └─ Cross-repo? → route via central coordinator

Does a gate demand isolation / parallelism / independent failure?
   ├─ No  → stay a skill (spun up on demand)
   └─ Yes → promote to a full sub-agent
```

> The endpoint is a **fleet of narrow specialists** — not one omniscient agent.

---

## The Invariant

> **At any moment, only the knowledge a given request**
> **actually needs is in context.**

The day "fully automated" means "everything loaded at once,"
both the cost gate and the quality gate fail.

---

# The Thesis, Literally

# Distribute the knowledge.
# Centralize only the routing.

The coordinator succeeds not by knowing things —
**but by knowing who does.**
