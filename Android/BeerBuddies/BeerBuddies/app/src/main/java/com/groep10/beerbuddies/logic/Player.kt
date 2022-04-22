package com.groep10.beerbuddies.logic

import com.groep10.beerbuddies.enums.Color

class Player(
    var id: Int,
    var name: String,
    var color: Color,
    var sips: Int,
    var drank: Int,
    var challenges: Int
) {

    fun UpdatePlayer(challenge: Boolean, sipped: Int){
        if (challenge){
            this.challenges =+ 1
        }
        else
        {
            this.sips =+ sipped
            this.drank  =+ sipped
        }
    }

//example
//    fun UpdatePlayers(players: List<Player>): List<Player>{
//        for( p in players){
//            p.sips = 69
//        }
//        return players
//    }
}