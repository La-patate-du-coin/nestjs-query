---
title: Getting Started
---

Nestjs-Query is collection of packages to make crud for `graphql` (and potentially other transports) easier.

## Why?

While working on projects in nestjs it was very easy to get up and running with typeorm and graphql however, there were many patterns that were common between the resolvers. In particular querying, sorting and paging.

## Features

- Built on top of [nestjs](https://nestjs.com/)
- Out of the box [CRUD for GraphQL](../graphql/resolvers.mdx) using [TypeORM](https://typeorm.io/)
- [Aggregate Queries](../graphql/aggregations.mdx) on objects and their relations.
- Out of the box [subscriptions](../graphql/subscriptions.mdx) on all `CRUD` operations.
- Support for one to one, one to many, many to one and many to many [relations](../graphql/relations.mdx).
- Built in [dataloader](https://github.com/graphql/dataloader) avoiding the `n+1` problem
- Relay [connections](https://facebook.github.io/relay/graphql/connections.htm) for paging results

## Install

Check out the [installation docs](./install.md)

## Packages

NestJS-Query is composed of multiple packages

- [`@ptc-org/nestjs-query-core`](https://github.com/La-patate-du-coin/nestjs-query/tree/master/packages/core) - Defines all interfaces and utility types implemented by the other packages.
- [`@ptc-org/nestjs-query-graphql`](https://github.com/La-patate-du-coin/nestjs-query/tree/master/packages/query-graphql) - Package that provides the graphql resolver and decorators for crud endpoints.
- [`@ptc-org/nestjs-query-typeorm`](https://github.com/La-patate-du-coin/nestjs-query/tree/master/packages/query-typeorm) - Package that implements a Typeorm service that can be used by itself or with the graphql resolver provided by `@ptc-org/nestjs-query-graphql`.
