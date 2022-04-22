package com.groep10.beerbuddies.logic

class Game(
    val id: Int,
    val name: String,
    var players: MutableList<Player> = mutableListOf(),
    var packId: Int,
    var miniGames: MutableList<MiniGameCard> = mutableListOf()
) {

}