# MiBarrio - OpenSpec Configuration

## Overview

This project uses the OpenSpec architecture for modular specification-driven development. It provides a community management platform for local neighborhoods.

## Project Structure

```
MiBarrio/
├── .openspec/
│   ├── config.yaml           # Main configuration file
│   ├── README.md             # This file
│   └── modules/              # Module specifications
│       ├── dashboard.spec.ts
│       ├── users.spec.ts
│       ├── services.spec.ts
│       ├── events.spec.ts
│       └── reports.spec.ts
```

## Modules

Each module is defined in a `.spec.ts` file that describes:

- **Interface definitions**: Data structures and types
- **Actions API**: Available methods and their signatures  
- **Default state**: Initial state for the module's context

### Module List

| Module | Description | Status |
|--------|-------------|--------|
| Dashboard | Main dashboard with metrics and statistics | Planning |
| Users | User management (residents, volunteers, staff) | Planning |
| Services | Community services registration and management | Planning |
| Events | Event scheduling and community activities | Planning |
| Reports | Report generation for decision makers | Planning |

## Technology Stack

- **Frontend**: Web application with React
- **Language**: JavaScript/TypeScript
- **Database**: PostgreSQL

## Getting Started

1. Review the main [config.yaml](../config.yaml) to understand project settings
2. Each module in the `modules/` directory defines its contract
3. Implement each module following its specification
4. Use TypeScript types from `.spec.ts` files as your contract

## License

Proprietary / All rights reserved
