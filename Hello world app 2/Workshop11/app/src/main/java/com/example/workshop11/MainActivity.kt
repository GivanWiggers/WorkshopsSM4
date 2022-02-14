package com.example.workshop11

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val buttonClick = findViewById<Button>(R.id.buttonChange)
        buttonClick.setOnClickListener{
            val textView = findViewById<TextView>(R.id.textviewChange)
            val message = textView.getText().toString();
            val intent = Intent(this, NewActivity::class.java)
            intent.putExtra("message", message)
            startActivity(intent)
        }


    }


}