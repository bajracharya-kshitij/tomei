import { hashSync } from "bcryptjs";
import { DataTypes } from "sequelize";

import { TimestampsModel } from "../../classes/timestamps-model";
import { timestamps } from "../../constants/timestamps";

export default class Account extends TimestampsModel {

    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public image: string;

}

const hooks = {
    afterValidate: async (user: any) => {
        if (user.password) {
            user.password = hashSync(user.password, 10)
        }
    }
};

export const attributes = {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING
    }
};

export const init = (sequelize: any): void => {
    Account.init(attributes, {
        sequelize,
        tableName: "accounts",
        underscored: true,
        paranoid: true,
        ...timestamps,
        hooks,
    });
};
