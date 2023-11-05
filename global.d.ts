declare global {
  namespace Express {
    interface Request {
      oidc: any; // Replace 'any' with the actual type if available
    }
  }
}
