package com.groep10.beerbuddies

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.groep10.beerbuddies.databinding.ActivityHomeBinding

private lateinit var binding: ActivityHomeBinding

class HomeActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityHomeBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)

        supportActionBar?.hide()

        binding.btnParty.setOnClickListener{
            var intent = Intent(this@HomeActivity, PartyPackSelectorActivity::class.java)
            intent.putExtra("type","Party")
            startActivity(intent)
        }

        binding.btnTeam.setOnClickListener{
            var intent = Intent(this@HomeActivity, PartyPackSelectorActivity::class.java)
            intent.putExtra("type","Team")
            startActivity(intent)
        }

        binding.btnSettings.setOnClickListener{
            var intent = Intent(this@HomeActivity, SettingsActivity::class.java)
            startActivity(intent)
        }

        binding.btnHowTopPlay.setOnClickListener{
            var intent = Intent(this@HomeActivity, HowToPlayActivity::class.java)
            startActivity(intent)
        }
    }
}