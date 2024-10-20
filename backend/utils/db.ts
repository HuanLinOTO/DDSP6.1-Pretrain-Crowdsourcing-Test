import { Database } from 'minato'
import { resolve as pres } from "path"
import fs from 'fs';
import * as DBTypes from '../../types/db';


// export interface Tables{}

let database: Database<DBTypes.Tables>;

const useDB = async (): Promise<Database<DBTypes.Tables>> => {
    if (!database) {
        if (!fs.existsSync(pres("data/"))) {
            fs.mkdirSync(pres("data/"))
        }
        if (!fs.existsSync(pres("data/db/"))) {
            fs.mkdirSync(pres("data/db/"))
        }

        database = new Database();
        await database.connect('sqlite', {
            path: pres("data/db/.data.db")
        })

        database.extend("record", {
            id: "integer",
            token: "string",
            answer_record: "string",
            answered_questions: "string"
        }, {
            primary: "id",
            autoInc: true
        })

    }
    return database;
}

export default useDB