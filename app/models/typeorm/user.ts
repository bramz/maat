import {Entity, Column, PrimaryGeneratedColumn, Unique, BaseEntity, OneToMany} from "typeorm"
import * as bcrypt from 'bcryptjs'
import { Dashboard } from "./dashboard"

@Entity('data_user')
@Unique(['email'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'id'})
    id!: string

    @Column('varchar', { name: 'email', length: 255, nullable: false})
    email!: string

    @Column('text',  { name: 'password', nullable: false})
    password!: string

    @Column('varchar', { name: 'perms', default: 'normal', nullable: false, length: 25 })
    perms!: string

    @Column('varchar', { name: 'first_name', length: 255 })
    firstName?: string

    @Column('varchar', { name: 'last_name', length: 255 })
    lastName?: string

    @Column('varchar', { name: 'middle_name', length: 255 })
    middleName?: string

    @Column('varchar', { name: 'address', length: 255 })
    address?: string

    @Column('text', {name: 'phone'})
    phone?: string

    @OneToMany(() => Dashboard, dashboard => dashboard.user)
    dashboards!: Dashboard[];

    encryptPassword(plaintext: string) {
        plaintext = bcrypt.hashSync(plaintext, 14)
        return plaintext
    }

    passwordValidator(plaintext: string) {
        return bcrypt.compareSync(plaintext, this.password)
    }
}