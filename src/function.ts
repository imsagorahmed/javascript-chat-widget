import { UserPropsType } from './types';
export function sayHello({firstName}: UserPropsType) {
    console.log(`Hello, ${firstName}.`);
}