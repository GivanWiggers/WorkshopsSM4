package com.groep10.beerbuddies

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.groep10.beerbuddies.databinding.ActivityHowtoplayBinding
import com.groep10.beerbuddies.databinding.ActivityPackselectorBinding

private lateinit var binding: ActivityHowtoplayBinding

class HowToPlayActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityHowtoplayBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)

        supportActionBar?.hide()
    }
}