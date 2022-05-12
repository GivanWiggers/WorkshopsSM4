package com.example.memoriespoc

import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.ImageButton
import com.google.android.material.bottomnavigation.BottomNavigationView
import androidx.appcompat.app.AppCompatActivity
import androidx.navigation.findNavController
import androidx.navigation.ui.AppBarConfiguration
import androidx.navigation.ui.setupActionBarWithNavController
import androidx.navigation.ui.setupWithNavController
import com.google.android.material.floatingactionbutton.FloatingActionButton

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        supportActionBar!!.hide()

        val navView: BottomNavigationView = findViewById(R.id.nav_view)
        val photo: ImageButton = findViewById(R.id.camera)
        val back: FloatingActionButton = findViewById(R.id.backButton)
        back.visibility = View.GONE
        val navController = findNavController(R.id.nav_host_fragment_activity_main)
        // Passing each menu ID as a set of Ids because each
        // menu should be considered as top level destinations.
        val appBarConfiguration = AppBarConfiguration(
            setOf(
                R.id.home2, R.id.camera, R.id.map
            )
        )
        setupActionBarWithNavController(navController, appBarConfiguration)
        navView.setupWithNavController(navController)

       photo.setOnClickListener {
           navController.navigate(R.id.photo)
           navView.visibility = View.GONE
           back.visibility = View.VISIBLE
       }
        back.setOnClickListener {
            navController.popBackStack()
            navView.visibility = View.VISIBLE
            back.visibility = View.GONE
        }
    }
//    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
//        super.onActivityResult(requestCode, resultCode, data)
//        if (requestCode == cameraRequest) {
//            val photo: Bitmap = data?.extras?.get("data") as Bitmap
//            imageView.setImageBitmap(photo)
//        }
//    }
}