package com.example.workshop11

import android.os.Bundle
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
class NewActivity : AppCompatActivity(){
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.new_activity)
        val extras = getIntent().getExtras();
        val string = extras?.getString("message")
        val textView = findViewById<TextView>(R.id.textView)
        textView.setText(string)

    }
}