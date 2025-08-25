import { UserPropsType } from './types';
export function sayHello({firstName, lastName, age}: UserPropsType) {
    console.log(`Hello, ${firstName} ${lastName}. You are ${age} years old.`);
}