import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { contributions } from '../../../../../models/contributions.model';
import { members } from '../../../../../models/members.model';

@Injectable()
export class PoolManagerService {

    private membersListRef = this.af.list<members>('members-list');
    private contributionsListRef = this.af.list<contributions>('contributions-list');

    constructor(
        private af: AngularFireDatabase
    ) {}

    getMembersList()  {
        return this.membersListRef;
    }

    getContributionsList() {
        return this.contributionsListRef;
    }

    addMember(member: members){
        return this.membersListRef.push(member);
    }

    updateMember(member: members){
        return this.membersListRef.update(member.key, member);
    }

    removeMember(member: members){
        return this.membersListRef.remove(member.key);
    }

    addContribution(contribution: contributions){
        return this.contributionsListRef.push(contribution);
    }

    updateContribution(contribution: contributions){
        return this.contributionsListRef.update(contribution.key, contribution);
    }

    removeContribution(contribution: contributions){
        return this.contributionsListRef.remove(contribution.key);
    }

}
