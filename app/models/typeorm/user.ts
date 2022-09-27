import {Entity, Column, PrimaryGeneratedColumn, Generated, Unique} from "typeorm"
import * as bcrypt from 'bcryptjs'

@Entity()
@Unique(['email'])
export class user {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column('text')
    email!: string

    @Column('text')
    password!: string

    @Column('varchar', { length: 9 })
    perms!: string

    encryptPassword() {
        this.password = bcrypt.hashSync(this.password, 8)
    }

    passwordValidator(plaintext: string) {
        return bcrypt.compareSync(plaintext, this.password)
    }
}