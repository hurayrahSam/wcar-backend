import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    private readonly logger: Logger = new Logger();


    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const recordTime = Date.now();
        const requestType = context.getType<GqlContextType>();

        if (requestType === "http") {
        } else if (requestType === "graphql") {
            const gqlContext = GqlExecutionContext.create(context);
            this.logger.log(`${this.stringgify(gqlContext.getContext().req.body)}`, `REQUEST`);
            return next
                .handle()
                .pipe(
                    tap((contetx) => {
                        const responseTime = Date.now() - recordTime;
                        this.logger.log(`${this.stringgify(contetx)} - ${responseTime}ms \n\n`, `RESPONSE`);
                    }),
                );
        }
    }
    private stringgify(context: ExecutionContext): string {
        return JSON.stringify(context).slice(0, 10);
    }
}