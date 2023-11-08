# User Module

This documentation outlines the structure and responsibilities of the `user.module` within the REST API.

## Folder Structure

- `application/`: Contains the command and query handlers. Commands modify the state (Create, Update, Delete), while queries retrieve state (Read).
- `core/`: Includes the core domain logic and entities representing the user data and the primary business rules.
- `presentation/`: Houses the `user.controller.ts` which is the entry point for user-related HTTP requests.

## User Controller

The `user.controller.ts` located at `src/user/presentation/rest` is responsible for handling the REST API endpoints for user operations:

- `GET /user/:id`: Retrieves the details of a user by their unique identifier.
- `PUT /user/:id`: Updates a user's details based on their unique identifier.
- `POST /user`: Creates a new user with the data provided in the request body.
- `POST /user/login`: Authenticates a user based on their login credentials.

Each method in the controller uses the `CommandBus` or `QueryBus` from the CQRS module to handle the business logic, ensuring a clean separation between the controller and the application logic layers.

### Decorators and Helpers

The controller methods use decorators from `nestjs/swagger` for API documentation and from `nestjs/common` and custom decorators to facilitate validation and execution of operations.

By keeping the API surface well-defined and documented, this module ensures a clear and maintainable structure that facilitates further development and maintenance.

## Conclusion

The `user.module` is built with a clear separation of concerns, following the principles of CQRS, and is designed for scalability and maintainability. This module is a fundamental part of the REST API, providing all the necessary operations for user management.
