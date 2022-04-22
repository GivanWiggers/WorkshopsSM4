package com.groep10.beerbuddies.logic

import android.content.SharedPreferences.Editor
import androidx.appcompat.app.AppCompatActivity
import com.groep10.beerbuddies.enums.Frequency

class Settings(
    var language: String,
    var miniGameFrequency: Frequency
) {

//Can't use sharedPreferences in class but can in Activity

//    fun UpdateSettings(){
//        val sharedPref = this?.getPreferences(AppCompatActivity.MODE_PRIVATE) ?: return
//        with(sharedPref.edit()) {
//            putString("language", this.language)
//            putInt("frequency", this.miniGameFrequency)
//            apply()
//        }
//    }
}