import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { FriendsFam } from "../models/friendsfam.model";


@Injectable()

export class FriendsfamService{

    private friendsfamRef = this.db.list<FriendsFam>('friendsfam');

    constructor(private db: AngularFireDatabase){

    }

    getFriendsfam(){
        return this.friendsfamRef;
    }

    addFriendfam(ff: FriendsFam){
        this.friendsfamRef.push(ff);
    }

    editFriendfam(ff: FriendsFam){
        return this.friendsfamRef.update(ff.key,ff);
    }

    removeFriendfam(ff: FriendsFam){
        return this.friendsfamRef.remove(ff.key);
    }
    
} 