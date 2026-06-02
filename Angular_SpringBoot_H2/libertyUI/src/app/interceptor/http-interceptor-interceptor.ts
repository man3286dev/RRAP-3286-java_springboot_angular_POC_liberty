/*import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`Request on the way to ${req.url}`);
  //new one 
  const token=localStorage.getItem("angularTokenInterceptor");
 
  const newReq = req.clone({
    setHeaders:{
      Authorization:`${token}`,      
      'Content-Type': 'application/json'
    }

  });

  return next(newReq);
};*/
