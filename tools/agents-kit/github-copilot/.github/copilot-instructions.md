- name: Agent DevKit
  description: Rules for Agent DevKit (AGENTS.md, wiki, docs, skills, commands, specs)
  rules:
    - Include AGENTS.md, wiki, docs, skills, commands, specs
    - Read AGENTS.md as the core contract for agent work in this project.
    - Read wiki/index.md to understand methodology before answering architecture or delivery questions.
    - If modifying code, read wiki/architecture/library-strategy.md if remote data, forms, state or validation are involved, to ensure library alignment.
    - Adhere to the defined layers in wiki/architecture/frontend-clean-architecture.md.
    - When asked for significant changes, create or update a specification in specs/ before implementing.
    - If a change significantly deviates from the wiki architecture, record the deviation in docs/architecture/decisions.md.
    - Do not commit changes without adding proportional tests or verifying existing ones.
