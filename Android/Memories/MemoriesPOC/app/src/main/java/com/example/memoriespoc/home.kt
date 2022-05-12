package com.example.memoriespoc

import android.content.Intent
import android.os.Bundle
import android.util.Log
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.ImageView
import android.widget.TextView
import com.example.memoriespoc.databinding.ActivityHomeBinding
import com.example.memoriespoc.util.getData
import java.io.Serializable

private lateinit var binding: ActivityHomeBinding

class home : Fragment() {
    override fun onCreateView(
        view: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {

        val packageName = getActivity()?.getPackageName()
        binding = ActivityHomeBinding.inflate(layoutInflater)
        val view = binding.root

        getData().forEach{
            val inflater = LayoutInflater.from(this.requireActivity()).inflate(R.layout.home_bigcard, null)

            val date: TextView = inflater.findViewById(R.id.date)
            val front: ImageView = inflater.findViewById(R.id.imageFront)
            val back: ImageView = inflater.findViewById(R.id.imageBack)

            date.text = it.date

            val idFront = resources.getIdentifier(it.front, "drawable", packageName)
            front.setImageResource(idFront)
            val idBack = resources.getIdentifier(it.back, "drawable", packageName)
            back.setImageResource(idBack)

            val data = it
            inflater.setOnClickListener {
                var intent = Intent(this.requireActivity(), PhotoViewer::class.java)
                intent.putExtra("data", data as Serializable)
                startActivity(intent)
            }

            binding.containerBigCard.addView(inflater, binding.containerBigCard.childCount)
        }

        getData().forEach{
            val inflater = LayoutInflater.from(this.requireActivity()).inflate(R.layout.home_smallcard, null)

            val image: ImageView = inflater.findViewById(R.id.image)
            val city: TextView = inflater.findViewById(R.id.txtCity)
            val country: TextView = inflater.findViewById(R.id.txtCountry)

            val id = resources.getIdentifier(it.back, "drawable", packageName)
            image.setImageResource(id)
            city.text = it.city
            country.text = it.country

            val data = it
            inflater.setOnClickListener {
                var intent = Intent(this.requireActivity(), PhotoViewer::class.java)
                intent.putExtra("data", data as Serializable)
                startActivity(intent)
            }

            binding.containerSmallCard.addView(inflater, binding.containerSmallCard.childCount)
        }

        binding.lblSeeAll1.setOnClickListener {
            var intent = Intent(this.requireActivity(), YourRecentMemories::class.java)
            startActivity(intent)
            Log.i("Test", "updated code")
        }

        binding.lblSeeAll2.setOnClickListener {
            var intent = Intent(this.requireActivity(), MostPopularPlaces::class.java)
            startActivity(intent)
        }

        return view
    }


}
