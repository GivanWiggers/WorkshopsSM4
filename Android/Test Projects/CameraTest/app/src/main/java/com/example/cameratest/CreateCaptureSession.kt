package com.example.cameratest

import android.content.ContentValues.TAG
import android.hardware.camera2.CameraAccessException
import android.hardware.camera2.CameraCaptureSession
import android.hardware.camera2.CameraDevice
import android.hardware.camera2.CaptureRequest
import android.util.Log
import android.view.Surface
import java.util.*

public class CreateCaptureSession {

    private fun createCameraPreviewSessionFront() {
        try {
            val texture = textureViewFront.surfaceTexture

            texture.setDefaultBufferSize(previewSizeFront.width, previewSizeFront.height)
            val surface = Surface(texture)
            previewRequestBuilderFront =
                cameraDeviceFront!!.createCaptureRequest(CameraDevice.TEMPLATE_PREVIEW)
            previewRequestBuilderFront.addTarget(surface)

            // Here, we create a CameraCaptureSession for camera preview.
            cameraDeviceFront?.createCaptureSession(
                Arrays.asList(
                    surface,
                    imageReaderFront?.surface
                ), object : CameraCaptureSession.StateCallback() {
                    override fun onConfigured(cameraCaptureSession: CameraCaptureSession) {
                        // The camera is already closed
                        if (cameraDeviceFront == null) return
                        // When the session is ready, we start displaying the preview.
                        captureSessionFront = cameraCaptureSession
                        try {
                            // Auto focus should be continuous for camera preview.
                            previewRequestBuilderFront.set(
                                CaptureRequest.CONTROL_AF_MODE,
                                CaptureRequest.CONTROL_AF_MODE_CONTINUOUS_PICTURE
                            )
                            // Finally, we start displaying the camera preview.
                            previewRequestFront = previewRequestBuilderFront.build()
                            captureSessionFront?.setRepeatingRequest(
                                previewRequestFront,
                                captureCallback,
                                backgroundHandler
                            )
                        } catch (e: CameraAccessException) {
                            Log.e(TAG, e.toString())
                        }
                    }

                    override fun onConfigureFailed(session: CameraCaptureSession) {
                    }
                }, null
            )
        } catch (e: CameraAccessException) {
            Log.e(TAG, e.toString())
        }
    }
}