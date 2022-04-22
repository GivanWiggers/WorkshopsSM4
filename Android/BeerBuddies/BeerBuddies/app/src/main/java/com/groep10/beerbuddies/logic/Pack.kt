package com.groep10.beerbuddies.logic

import com.groep10.beerbuddies.enums.Type

class Pack(
    val id: Int,
    val name: String,
    val cards: MutableList<Card> = mutableListOf(),
    val type: Type,
    val difficulty: String
) {


}