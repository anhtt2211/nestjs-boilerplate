export * from "./di-tokens";

export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

export const RABBIT_MQ_CONNECTION = "amqp://localhost:15672/";

// main
export const RABBIT_EXCHANGE = "SOCIAL";

export const USER_ROUTE_KEY = "USER_ROUTE_KEY";

export const USER_QUEUE = "USER_QUEUE";

// dead letter
export const RABBIT_DL_EXCHANGE = "SOCIAL_DL";

export const USER_DL_ROUTE_KEY = "USER_DL_ROUTE_KEY";

export const USER_DLQ = "USER_DLQ";

export const USER_RMQ_CLIENT = "USER_RMQ_CLIENT";
