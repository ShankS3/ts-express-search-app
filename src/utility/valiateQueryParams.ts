import { Request, Response, NextFunction } from 'express';
import { isEmpty } from 'lodash';

const validateQueryParams = (params: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    for(const param of params) {
        if(isEmpty(req.query[param]))
          return res.status(400).send(`Required parameter '${param}' is missing`);
    }
    next();
  };
};

export default validateQueryParams;
