import jwt from "jsonwebtoken";
import config from "config";

interface VerifiedJwt {
  valid: boolean;
  expired: boolean | null;
  decoded: string | jwt.JwtPayload | null;
}

const privateKey: string = config.get<string>("privateKey");
const publicKey: string = config.get<string>("publicKey");

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, privateKey, {
    ...(options && options),
    algorithm: "RS256",
  });
}

export function verifyJwt(token: string): VerifiedJwt {
  try {
    const decoded: string | jwt.JwtPayload = jwt.verify(token, publicKey);
    return {
      valid: true,
      expired: null,
      decoded,
    };
  } catch (err: any) {
    return {
      valid: false,
      expired: err.message === "jwt expired",
      decoded: null,
    };
  }
}
