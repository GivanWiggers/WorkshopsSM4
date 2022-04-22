package com.groep10.beerbuddies.logic

import com.groep10.beerbuddies.enums.Color

class Team(
    val id: Int,
    val name: String,
    val color: Color,
    val players: MutableList<Player> = mutableListOf()
) {
}