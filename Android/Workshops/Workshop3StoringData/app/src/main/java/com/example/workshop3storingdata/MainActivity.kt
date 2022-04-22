package com.example.workshop3storingdata

import android.content.Context
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import com.google.firebase.database.FirebaseDatabase


class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val button = findViewById<Button>(R.id.button)
        val reloadButton = findViewById<Button>(R.id.reloadButton)
        val resetButton = findViewById<Button>(R.id.resetButton)

        val name = findViewById<TextView>(R.id.name)
        val age = findViewById<TextView>(R.id.age)

        val sharedPref = this?.getPreferences(Context.MODE_PRIVATE) ?: return
        name.setText(sharedPref.getString("name", "test"))
        age.setText(sharedPref.getString("age", "0"))




        button.setOnClickListener {
            save()
//            val database = FirebaseDatabase.getInstance()
//            val myRef = database.getReference("message")
//            myRef.setValue("Hello world")
        }
        reloadButton.setOnClickListener {
            load()
        }
        resetButton.setOnClickListener {
            reset()
        }
    }

    fun save() {

        val name = findViewById<TextView>(R.id.name)
        val age = findViewById<TextView>(R.id.age)

        val sharedPref = this?.getPreferences(MODE_PRIVATE) ?: return
        with(sharedPref.edit()) {
            //putString("name", name.text.toString())
            //putString("age", age.text.toString())
            putString("name", "Test3")
            putString("age", "72")
            apply()
        }
    }

    fun load() {
        val name = findViewById<TextView>(R.id.name)
        val age = findViewById<TextView>(R.id.age)
        val sharedPref = this?.getPreferences(MODE_PRIVATE) ?: return
        with(sharedPref.edit()) {
            name.setText(sharedPref.getString("name", ""))
            age.setText(sharedPref.getString("age", ""))
        }
    }
    fun reset(){
        val sharedPref = this?.getPreferences(MODE_PRIVATE) ?: return
        with(sharedPref.edit()) {
            putString("name", "empty")
            putString("age", "0")
            apply()
        }
    }
}