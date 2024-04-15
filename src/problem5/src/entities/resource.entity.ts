import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({name: 'resource'})
export class ResourceEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @UpdateDateColumn({
        type: 'timestamp'
    })
    updated_at: Date

    @CreateDateColumn({
        type: 'timestamp'
    })
    created_at: Date
}