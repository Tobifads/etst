// import{
//     useQuery,
//     useMutation,
//     useQueryClient,
//     useInfiniteQuery,
// }from '@tanstack/react-query'

import {
    useMutation,
} from '@tanstack/react-query';
import { signInAccount, createUserAccount } from '../appwirte/api'
import { INewUser } from '@/types'

export const useCreateUserAccount = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user)

    })
}
export const useSigninAccount = () => {
    return useMutation({
        mutationFn: (user: {
            email: string; password:
            string}) => signInAccount(user)

    })
}