package com.example.memoriespoc

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.LayoutInflater
import android.widget.ImageView
import android.widget.TextView
import com.example.memoriespoc.databinding.ActivityPhotoviewerBinding
import com.example.memoriespoc.util.Data

private lateinit var binding: ActivityPhotoviewerBinding

class PhotoViewer : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityPhotoviewerBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)

        supportActionBar?.hide()

        val data = intent.extras?.get("data") as Data
        val idFront = resources.getIdentifier(data.front, "drawable", packageName)
        val idBack = resources.getIdentifier(data.back, "drawable", packageName)
        binding.image.setImageResource(idBack)
        binding.txtCity.text = data.city
        binding.txtDate.text = data.date
        var isBackShowing: Boolean = true


        binding.btnBack.setOnClickListener{
            super.onBackPressed()
        }

        binding.btnSwitch.setOnClickListener{
            if(isBackShowing == true){
                binding.image.setImageResource(idFront)
                isBackShowing = false
            }else{
                binding.image.setImageResource(idBack)
                isBackShowing = true
            }
        }



    }
}