package com.example.memoriespoc

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.LayoutInflater
import android.widget.ImageView
import android.widget.TextView
import com.example.memoriespoc.databinding.ActivityMostpopularplacesBinding
import com.example.memoriespoc.util.getData
import java.io.Serializable

private lateinit var binding: ActivityMostpopularplacesBinding

class MostPopularPlaces : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMostpopularplacesBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)

        supportActionBar?.hide()

        binding.backButton.setOnClickListener{
            super.onBackPressed()
        }

        getData().forEach{
            val inflater = LayoutInflater.from(this).inflate(R.layout.home_smallcard, null)

            val image: ImageView = inflater.findViewById(R.id.image)
            val city: TextView = inflater.findViewById(R.id.txtCity)
            val country: TextView = inflater.findViewById(R.id.txtCountry)

            val id = resources.getIdentifier(it.back, "drawable", packageName)
            image.setImageResource(id)
            city.text = it.city
            country.text = it.country

            val data = it
            inflater.setOnClickListener {
                var intent = Intent(this, PhotoViewer::class.java)
                intent.putExtra("data", data as Serializable)
                startActivity(intent)
            }

            binding.containerSmallCard.addView(inflater, binding.containerSmallCard.childCount)
        }

    }
}