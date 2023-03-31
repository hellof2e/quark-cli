import { getManager, Repository, Not, Equal, Like } from "typeorm";
import { validate, ValidationError } from "class-validator";
import { User } from "../entity/user";
export const getUsers = async () => {
     const userRepository: Repository<User> = getManager().getRepository(User);
     const users: User[] = await userRepository.find();
     if (users) {
        return users;
     } else {
        throw new Error('未查询到用户信息');
     }
}
export const getUser = async (id: number) => {
     const userRepository: Repository<User> = getManager().getRepository(User);
     const user: User | undefined = await userRepository.findOne(id);
     if (user) {
         return user;
     } else {
         throw new Error('未查询到相关用户信息');
     }
}
export const createUser = async (params: {
    name: string
    email: string
}) => {
    const {name, email} = params;
    const userRepository: Repository<User> = getManager().getRepository(User);
    const userToBeSaved: User = new User();
    userToBeSaved.name = name;
    userToBeSaved.email = email;
    const errors: ValidationError[] = await validate(userToBeSaved); // errors is an array of validation errors
    if (errors.length > 0) {
        throw new Error(JSON.stringify(errors[0].constraints));
    } else if (await userRepository.findOne({ email: userToBeSaved.email })) {
        throw new Error('The specified e-mail address already exists');
    } else {
        const user = await userRepository.save(userToBeSaved);
        return user;
    }
}

export const updateUser = async (params: {
    id: string
    name: string
    email: string
}) => {
    const {id, name, email} = params;
    const userRepository: Repository<User> = getManager().getRepository(User);
    const userToBeUpdated: User = new User();
    userToBeUpdated.id = +id || 0; 
    userToBeUpdated.name = name;
    userToBeUpdated.email = email;

    const errors: ValidationError[] = await validate(userToBeUpdated); // errors is an array of validation errors

    if (errors.length > 0) {
        throw new Error(JSON.stringify(errors[0].constraints))
    } else if (!await userRepository.findOne(userToBeUpdated.id)) {
        throw new Error("The user you are trying to update doesn't exist in the db");
    } else if (await userRepository.findOne({ id: Not(Equal(userToBeUpdated.id)), email: userToBeUpdated.email })) {
        throw new Error("The specified e-mail address already exists");
    } else {
        const user = await userRepository.save(userToBeUpdated);
        return user;
    }
}

export const deleteUser = async (id: string) => {
    const userRepository = getManager().getRepository(User);
    const userToRemove: User | undefined = await userRepository.findOne(+id || 0);
    if (!userToRemove) {
        throw new Error("The user you are trying to delete doesn't exist in the db");
    }  else {
        await userRepository.remove(userToRemove);
        return;
    }
}

export const deleteTestUsers = async () => {
    // get a user repository to perform operations with user
    // const userRepository = getManager().getRepository(User);

    // // find test users
    // const usersToRemove: User[] = await userRepository.find({ where: { email: Like("%@citest.com")} });
    // if (!usersToRemove) {
    //     throw new Error("The user you are trying to delete doesn't exist in the db")
    // }  else {
    //     // the user is there so can be removed
    //     await userRepository.remove(usersToRemove);
    //     return;
    // }
}