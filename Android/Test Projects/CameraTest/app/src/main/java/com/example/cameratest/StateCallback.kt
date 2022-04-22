package com.example.cameratest

import android.hardware.camera2.CameraDevice

public class StateCallback {
    private val stateCallbackFront = object : CameraDevice.StateCallback() {
        override fun onOpened(cameraDevice: CameraDevice) {
            this@CameraFragment.cameraDeviceFront = cameraDevie
            createCameraPreviewSessionFront()
        }
        override fun onDisconnected(cameraDevice: CameraDevice) {
            cameraDevice.close()
            this@CameraFragment.cameraDeviceFront = null
        }
        override fun onError(cameraDevice: CameraDevice, error: Int) {
            onDisconnected(cameraDevice)
            this@CameraFragment.activity?.finish()
        }
    }
}