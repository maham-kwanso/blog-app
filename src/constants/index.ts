import { ObjectShape } from 'yup';

type ObjectShapeValues = ObjectShape extends Record<string, infer V> ? V : never;
export type YupSchemaShape<T extends Record<any, any>> = Partial<Record<keyof T, ObjectShapeValues>>;

export const HTTP_STATUS = {
    SUCCESS: 200,
    CREATED: 201,
    NOT_FOUND: 404,
    BAD_REQUEST: 400,
    SERVER_ERROR: 500,
};

export const WRONG_EMAIL_OR_PASSWORD =
    "You have entered wrong email or password";
export const INVALID_EMAIL = "Invalid email address";
export const PASSWORD_VALIDATION_MESSAGE =
    "Password must contain 8 characters, one uppercase, one lowercase, one number and one special case character";




export    const articles = [
        {
            imageUrl: '',
            title: 'The impact of technology on the workplace: How technology is changing', 
            category: 'Technology', 
            date:'09-05-24', 
            author: 'Tracey Wilson',
            id: 1
        },
        {
            imageUrl: '',
            title: 'The impact of technology on the workplace: How technology is changing', 
            category: 'Technology', 
            date:'09-05-24', 
            author: 'Tracey Wilson',
            id:2
        },
        {
            imageUrl: '',
            title: 'The impact of technology on the workplace: How technology is changing', 
            category: 'Technology', 
            date:'09-05-24', 
            author: 'Tracey Wilson',
            id:3
        },
        {
            imageUrl: '',
            title: 'The impact of technology on the workplace: How technology is changing', 
            category: 'Technology', 
            date:'09-05-24', 
            author: 'Tracey Wilson',
            id:4
        },
        {
            imageUrl: '',
            title: 'The impact of technology on the workplace: How technology is changing', 
            category: 'Technology', 
            date:'09-05-24', 
            author: 'Tracey Wilson',
            id:5
        },
        {
            imageUrl: '',
            title: 'The impact of technology on the workplace: How technology is changing', 
            category: 'Technology', 
            date:'09-05-24', 
            author: 'Tracey Wilson',
            id:6
        },
        {
            imageUrl: '',
            title: 'The impact of technology on the workplace: How technology is changing', 
            category: 'Technology', 
            date:'09-05-24', 
            author: 'Tracey Wilson',
            id:7
        },
    
    ];