import {Entity, Column, PrimaryGeneratedColumn, Unique, BaseEntity, ManyToOne, JoinColumn} from "typeorm"
import { User } from "./user";

@Entity('data_dashboard')
export class Dashboard extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column('varchar', {name: 'user_uuid'})
    user_uuid!: string

    @Column('varchar', { length: 25 })
    type!: string

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_uuid', referencedColumnName: 'id' })
    user!: User;
}