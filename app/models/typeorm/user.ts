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

    @Column('text')
    password!: string

    @Column('varchar', { length: 9 })
    perms!: string

    @OneToMany(() => Dashboard, dashboard => dashboard.user)
    dashboards!: Dashboard[];

    encryptPassword() {
        this.password = bcrypt.hashSync(this.password, 14)
    }

    passwordValidator(plaintext: string) {
        console.log(bcrypt.compareSync(plaintext, this.password))
        return bcrypt.compareSync(plaintext, this.password)
    }
}