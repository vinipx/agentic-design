---
sidebar_position: 5
---

# Use Case: Test Data Generation via MCP

Autonomously generate valid test data fixtures by connecting agents directly to staging databases or APIs.

## Scenario

Your E2E tests require a complex JSON fixture representing a specific user state (e.g., a user with a specific subscription plan and 3 past orders). Instead of manually crafting this JSON, an AI agent queries a staging environment to extract a real, valid data structure.

## Recommended Provider

**Cursor** — Best utilizing the Model Context Protocol (MCP) to seamlessly integrate external tools into the agent's context.

## Implementation Steps

### 1. Configure the MCP Server

Add an MCP server to your Cursor settings (`Cursor Settings > Features > MCP`). 

- For Databases: Use the official `postgres-mcp` or `mysql-mcp`.
- For APIs: Use a custom REST MCP or an OpenAPI-based MCP.

### 2. Instruct the Agent via Composer

Open Cursor Composer (`Cmd+I`) and provide a highly specific prompt:

> "Use the Postgres MCP tool to connect to the staging database. Find a user record where `subscription_status` is 'ACTIVE' and they have at least 3 records in the `orders` table. Extract the user object and their orders, anonymize the PII (change the name and email), and save the result as a valid JSON fixture in `tests/fixtures/active_user_with_orders.json`."

### 3. Agent Execution

1. The agent will invoke the MCP tool to run the SQL query.
2. It will receive the raw database output.
3. It will process the data (anonymizing it as requested).
4. It will propose the creation of the `active_user_with_orders.json` file.

### 4. Review and Accept

Review the generated JSON file to ensure no sensitive PII was leaked and that the structure matches your application's expectations, then accept the changes.
