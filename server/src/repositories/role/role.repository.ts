import {Repository} from "typeorm";
import {Role} from "@/db/entities/role.entity";
import {Roles} from "@/common/enums/role/role";

class RoleRepository {
    constructor(private dbRepository: Repository<Role>) {}


    public getIdByName(name: Roles): Promise<Role | null> {
        return this.dbRepository.findOne({
            where: {
                name
            }
        })
    }
}

export {RoleRepository}