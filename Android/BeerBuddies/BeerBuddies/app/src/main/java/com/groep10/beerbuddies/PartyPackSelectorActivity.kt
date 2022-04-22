package com.groep10.beerbuddies

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.groep10.beerbuddies.databinding.ActivityPackselectorBinding

private lateinit var binding: ActivityPackselectorBinding

class PartyPackSelectorActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityPackselectorBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)

        supportActionBar?.hide()

        val text = intent.getStringExtra("type")
        binding.tvTitle.text = text

    }
}
