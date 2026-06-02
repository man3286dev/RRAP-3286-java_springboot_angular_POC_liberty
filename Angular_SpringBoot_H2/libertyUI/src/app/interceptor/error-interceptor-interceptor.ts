/*import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error=>{
    if([400].includes(error.status)){
      console.log("unauthorize access resource");
    }
    const e=error.error.message || error.statusText;
    return throwError(()=>error);
  })
));
};*/
