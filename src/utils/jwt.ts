import { jwtVerify, JWTPayload } from "jose";

export function getJwtSecretKey() {
  const secret = process.env.NEXT_PUBLIC_SECRET_KEY;

  if (!secret) {
    throw new Error("JWT Secret key is not set");
  }

  const enc: Uint8Array = new TextEncoder().encode(secret);
  return enc;
}

export async function verifyJwtToken(
  token: string | undefined
): Promise<string | undefined> {
  if (token) {
    try {
      const { payload }: { payload: JWTPayload | null } = await jwtVerify(
        token,
        getJwtSecretKey()
      );

      if (payload) {
        return token;
      } else {
        return undefined;
      }
    } catch (error) {
      return undefined;
    }
  }
}
