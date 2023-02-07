import {UnauthorizedException} from "@/common/exceptions/user/unauthorized.exception";
import {jwtService} from "@/services/services";
import {ValidationExceptionMessages} from "@/common/enums/enums";

export const isAuthorizedFunction = (authHeader:string) => {
    const [tokenFormat, token] = authHeader.split(' ')

    if (tokenFormat !== 'Bearer' || !token) {
        throw new UnauthorizedException(ValidationExceptionMessages.USER_IS_UNAUTHORIZED);
    }

    try {
        jwtService.verifyToken(token);
        return token
    } catch {
        throw new UnauthorizedException(ValidationExceptionMessages.USER_IS_UNAUTHORIZED);
    }

}