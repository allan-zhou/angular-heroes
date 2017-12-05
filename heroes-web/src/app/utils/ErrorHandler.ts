import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

export class ErrorHandler {

    static handleServiceError(error: any): Promise<any> {
        return Promise.reject(error.message || error)
            .catch((err) => {
                // console.log(err);
                // console.log(error);
                throw error;
            });
    }

    static handleUnauthorizedError(error: any, router: Router): void {
        if (error.status === 401) {
            router.navigateByUrl('/login');
        }
    }
}