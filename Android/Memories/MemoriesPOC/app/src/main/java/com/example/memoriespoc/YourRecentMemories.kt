package com.example.memoriespoc

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.LayoutInflater
import android.widget.ImageView
import android.widget.TextView
import com.example.memoriespoc.databinding.ActivityYourrecentmemoriesBinding
import com.example.memoriespoc.util.getData
import java.io.Serializable

private lateinit var binding: ActivityYourrecentmemoriesBinding

class YourRecentMemories : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityYourrecentmemoriesBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)

        supportActionBar?.hide()

        binding.backButton.setOnClickListener{
            super.onBackPressed()
        }

        getData().forEach{
            val inflater = LayoutInflater.from(this).inflate(R.layout.home_bigcard, null)

            val date: TextView = inflater.findViewById(R.id.date)
            val front: ImageView = inflater.findViewById(R.id.imageFront)
            val back: ImageView = inflater.findViewById(R.id.imageBack)

            val frontId = resources.getIdentifier(it.front, "drawable", packageName)
            front.setImageResource(frontId)
            val backId = resources.getIdentifier(it.back, "drawable", packageName)
            back.setImageResource(backId)
            date.text = it.date

            val data = it
            inflater.setOnClickListener {
                var intent = Intent(this, PhotoViewer::class.java)
                intent.putExtra("data", data as Serializable)
                startActivity(intent)
            }

            binding.containerBigCard.addView(inflater, binding.containerBigCard.childCount)
        }

    }
}