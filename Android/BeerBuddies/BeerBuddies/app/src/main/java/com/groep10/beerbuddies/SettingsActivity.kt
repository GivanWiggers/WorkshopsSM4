package com.groep10.beerbuddies

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.groep10.beerbuddies.databinding.ActivityPackselectorBinding
import com.groep10.beerbuddies.databinding.ActivitySettingsBinding

private lateinit var binding: ActivitySettingsBinding

class SettingsActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivitySettingsBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)

        supportActionBar?.hide()
    }
}